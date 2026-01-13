'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'
import type { User } from '@/lib/data'

export default function Home() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })

      if (response.ok) {
        const newUser = await response.json()
        setUsers([...users, newUser])
        setName('')
        setEmail('')
        setMessage('User created successfully!')
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage('Error creating user')
        setTimeout(() => setMessage(''), 3000)
      }
    } catch (error) {
      console.error('Error creating user:', error)
      setMessage('Error creating user')
      setTimeout(() => setMessage(''), 3000)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setUsers(users.filter((user) => user.id !== id))
        setMessage('User deleted successfully!')
        setTimeout(() => setMessage(''), 3000)
      }
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Next.js Fullstack App</h1>
        <p>Frontend UI + Backend API</p>
      </header>

      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.formCard}`}>
          <h2>Add New User</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                placeholder="Enter name"
                required
              />
            </div>
            <div>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder="Enter email"
                required
              />
            </div>
            <button type="submit" className={styles.button}>
              Create User
            </button>
            {message && (
              <p className={styles.message}>{message}</p>
            )}
          </form>
        </div>

        <div className={styles.card}>
          <h2>Users List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : users.length === 0 ? (
            <p>No users found. Create one above!</p>
          ) : (
            <ul className={styles.userList}>
              {users.map((user) => (
                <li key={user.id} className={styles.userItem}>
                  <div>
                    <strong>{user.name}</strong>
                    <br />
                    <span className={styles.email}>{user.email}</span>
                  </div>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
