import { AuthService } from '@/utils/auth';
import { NextRequest, NextResponse } from 'next/server';


export interface AuthenticatedRequest extends NextRequest {
  user?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
}

export function withAuth(handler: (req: AuthenticatedRequest) => Promise<NextResponse>) {
  return async (req: NextRequest): Promise<NextResponse> => {
    try {
      const authHeader = req.headers.get('authorization');
      const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;

      if (!token) {
        return NextResponse.json(
          { error: 'Access token required' },
          { status: 401 }
        );
      }

      const user = AuthService.verifyToken(token);
      if (!user) {
        return NextResponse.json(
          { error: 'Invalid or expired token' },
          { status: 401 }
        );
      }

      // Add user to request object
      (req as AuthenticatedRequest).user = user;

      return handler(req as AuthenticatedRequest);
    } catch (error) {
      console.error('Auth middleware error:', error);
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      );
    }
  };
}

export function withAdminAuth(handler: (req: AuthenticatedRequest) => Promise<NextResponse>) {
  return withAuth(async (req: AuthenticatedRequest): Promise<NextResponse> => {
    if (req.user?.role !== 'admin') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      );
    }
    return handler(req);
  });
}