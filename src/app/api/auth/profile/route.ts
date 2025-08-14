import { NextResponse } from 'next/server';
import { AuthService } from '@/utils/auth'; 
// import { getUserProfile } from '@/db/mongodb';

export async function GET(request: Request) {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const session = AuthService.verifyToken(token); // Verify token and get user ID
    if (!session || !session.id) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

        const profile = await AuthService.getUserById(session.id); // Fetch user profile from DB
        if (!profile) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        const { password, ...safeProfile } = profile as any;
        return NextResponse.json(safeProfile);
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

    // Basic validation: ensure there is at least one updatable field
    const updatableFields = ['firstName', 'lastName', 'email', 'password', 'preferences', 'address'];
    const hasValidField = Object.keys(data || {}).some((k) => updatableFields.includes(k));
    if (!hasValidField) {
        return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 });
    }

    const success = await AuthService.updateUser(session.id, data);
    if (!success) {
        return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
    }
    // Optionally, fetch updated profile
    const updatedProfile = await AuthService.getUserById(session.id);
    return NextResponse.json(updatedProfile);
}