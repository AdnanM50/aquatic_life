import { ObjectId } from 'mongodb';

export interface User {
  _id?: ObjectId;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'customer' | 'admin';
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  preferences?: {
    newsletter: boolean;
    notifications: boolean;
  };
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface CreateUserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface UserSession {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}