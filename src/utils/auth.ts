import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getDatabase } from '@/db/mongodb';
import { ObjectId } from 'mongodb';
import { User, CreateUserData, LoginCredentials, UserSession } from '@/models/user';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export class AuthService {
  private static async getUsersCollection() {
    const db = await getDatabase();
    return db.collection<User>('users');
  }

  static async hashPassword(password: string): Promise<string> {
    const saltRounds = 12;
    return bcrypt.hash(password, saltRounds);
  }

  static async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  static generateToken(payload: UserSession): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } as jwt.SignOptions);
  }

  static verifyToken(token: string): UserSession | null {
    try {
      return jwt.verify(token, JWT_SECRET) as UserSession;
    } catch (error) {
      return null;
    }
  }

  static async createUser(userData: CreateUserData): Promise<{ success: boolean; user?: UserSession; error?: string }> {
    try {
      const users = await this.getUsersCollection();
      
      // Check if user already exists
      const existingUser = await users.findOne({ email: userData.email.toLowerCase() });
      if (existingUser) {
        return { success: false, error: 'User already exists with this email' };
      }

      // Hash password
      const hashedPassword = await this.hashPassword(userData.password);

      // Create user document
      const newUser: Omit<User, '_id'> = {
        email: userData.email.toLowerCase(),
        password: hashedPassword,
        firstName: userData.firstName,
        lastName: userData.lastName,
        role: 'customer',
        isEmailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        preferences: {
          newsletter: true,
          notifications: true,
        },
      };

      const result = await users.insertOne(newUser);
      
      const userSession: UserSession = {
        id: result.insertedId.toString(),
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        role: newUser.role,
      };

      return { success: true, user: userSession };
    } catch (error) {
      console.error('Error creating user:', error);
      return { success: false, error: 'Failed to create user' };
    }
  }

  static async loginUser(credentials: LoginCredentials): Promise<{ success: boolean; user?: UserSession; token?: string; error?: string }> {
    try {
      const users = await this.getUsersCollection();
      
      // Find user by email
      const user = await users.findOne({ email: credentials.email.toLowerCase() });
      if (!user) {
        return { success: false, error: 'Invalid email or password' };
      }

      // Verify password
      const isPasswordValid = await this.comparePassword(credentials.password, user.password);
      if (!isPasswordValid) {
        return { success: false, error: 'Invalid email or password' };
      }

      // Update last login
      await users.updateOne(
        { _id: user._id },
        { $set: { lastLogin: new Date(), updatedAt: new Date() } }
      );

      const userSession: UserSession = {
        id: user._id!.toString(),
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      };

      const token = this.generateToken(userSession);

      return { success: true, user: userSession, token };
    } catch (error) {
      console.error('Error logging in user:', error);
      return { success: false, error: 'Failed to login' };
    }
  }

  static async getUserById(userId: string): Promise<User | null> {
    try {
      const users = await this.getUsersCollection();
      return await users.findOne({ _id: new ObjectId(userId) });
    } catch (error) {
      console.error('Error getting user by ID:', error);
      return null;
    }
  }

  static async updateUser(userId: string, updateData: Partial<User>): Promise<boolean> {
    try {
      const users = await this.getUsersCollection();
      const result = await users.updateOne(
        { _id: new ObjectId(userId) },
        { $set: { ...updateData, updatedAt: new Date() } }
      );
      return result.modifiedCount > 0;
    } catch (error) {
      console.error('Error updating user:', error);
      return false;
    }
  }
}