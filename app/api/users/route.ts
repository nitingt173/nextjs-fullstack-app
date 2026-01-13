import { NextRequest, NextResponse } from 'next/server'
import { getUsers, createUser } from '@/lib/data'

// GET /api/users
export async function GET() {
  const users = getUsers()
  return NextResponse.json(users)
}

// POST /api/users
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const newUser = createUser(name, email)

    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }
}
