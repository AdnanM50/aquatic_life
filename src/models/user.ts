import { ObjectId } from 'mongodb';
import { model, Schema } from "mongoose";

export interface TUser {
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

export const UserSchema = new Schema<TUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer',
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    required: false,
  },
  preferences: {
    type: Object,
    required: false,
  },
  address: {
    type: Object,
    required: false,
  }
})

export const User = model<TUser>('User', UserSchema);