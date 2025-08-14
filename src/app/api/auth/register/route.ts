import { NextRequest, NextResponse } from 'next/server';
import { TUser } from '@/models/user';
import { AuthService } from '@/utils/auth';


export async function POST(req: NextRequest) {
  try {
    const body: TUser = await req.json();
    
    // Validate required fields
    const { email, password, firstName, lastName } = body;
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    const result = await AuthService.createUser(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    // Generate token for immediate login
    const token = AuthService.generateToken(result.user!);

    return NextResponse.json({
      message: 'User created successfully',
      user: result.user,
      token,
    }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}