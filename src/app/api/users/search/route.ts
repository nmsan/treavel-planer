import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
      const users = await User.find({}).sort({ id: 1 });
      return NextResponse.json(users);
    }

    // Use MongoDB text search for better performance
    const filteredUsers = await User.find({
      $or: [
        { firstName: { $regex: query, $options: 'i' } },
        { lastName: { $regex: query, $options: 'i' } },
        { location: { $regex: query, $options: 'i' } },
        { state: { $regex: query, $options: 'i' } }
      ]
    }).sort({ id: 1 });
    
    return NextResponse.json(filteredUsers);
  } catch (error) {
    console.error('Error searching users:', error);
    return NextResponse.json(
      { error: 'Failed to search users' },
      { status: 500 }
    );
  }
}
