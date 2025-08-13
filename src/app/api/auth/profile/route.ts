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

    const session = AuthService.verifyToken(token); // Verify token and get user session
    if (!session || !session.id) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const data = await request.json(); // Get the updated profile data from the request
    const success = await AuthService.updateUser(session.id, data);
    if (!success) {
        return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
    }
    // Optionally, fetch updated profile
    const updatedProfile = await AuthService.getUserById(session.id);
    return NextResponse.json(updatedProfile);
}