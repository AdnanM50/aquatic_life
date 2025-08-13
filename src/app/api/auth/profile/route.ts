import { NextResponse } from 'next/server';
import { AuthService } from '@/utils/auth'; 
// import { getUserProfile } from '@/db/mongodb';

export async function GET(request: Request) {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = AuthService.verifyToken(token); // Verify token and get user ID
    if (!userId) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

        // const profile = await getUserProfile(userId); // Fetch user profile from DB
        return NextResponse.json(userId);
}


export async function PUT(request: Request) {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = AuthService.verifyToken(token); // Verify token and get user ID
    if (!userId) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const data = await request.json(); // Get the updated profile data from the request
    // const updatedProfile = await updateUserProfile(userId, data); // Update user profile in DB
    return NextResponse.json(data);
}