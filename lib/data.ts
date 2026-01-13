// Shared data store (replace with a database in production)
export interface User {
  id: number
  name: string
  email: string
}

let users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
]

let nextId = 3

export function getUsers(): User[] {
  return users
}

export function getUserById(id: number): User | undefined {
  return users.find((user) => user.id === id)
}

export function createUser(name: string, email: string): User {
  const newUser: User = {
    id: nextId++,
    name,
    email,
  }
  users.push(newUser)
  return newUser
}

export function deleteUser(id: number): boolean {
  const userIndex = users.findIndex((user) => user.id === id)
  if (userIndex === -1) {
    return false
  }
  users.splice(userIndex, 1)
  return true
}
