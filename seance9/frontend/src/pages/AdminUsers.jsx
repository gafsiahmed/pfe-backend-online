import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function isAdmin() {
  try {
    const raw = localStorage.getItem('demo_auth')
    if (!raw) return false
    const data = JSON.parse(raw)
    return String(data?.role || '').toLowerCase() === 'admin'
  } catch {
    return false
  }
}

export default function AdminUsers() {
  const allowed = isAdmin()
  const [query, setQuery] = useState('')

  const users = useMemo(() => {
    return [
      {
        id: 'u1',
        firstName: 'Rania',
        lastName: 'Manna',
        email: 'rania@example.com',
        role: 'admin',
        age: 28,
        salary: 6000,
        isMarried: false,
      },
      {
        id: 'u2',
        firstName: 'Ahmed',
        lastName: 'Gafsi',
        email: 'ahmed@example.com',
        role: 'user',
        age: 32,
        salary: 4200,
        isMarried: true,
      },
      {
        id: 'u3',
        firstName: 'Sarra',
        lastName: 'Ben Ali',
        email: 'sarra@example.com',
        role: 'user',
        age: 22,
        salary: 0,
        isMarried: false,
      },
    ]
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return users
    return users.filter((u) => {
      const fullName = `${u.firstName} ${u.lastName}`.toLowerCase()
      return (
        fullName.includes(q) ||
        u.email.toLowerCase().includes(q) ||
        String(u.role).toLowerCase().includes(q)
      )
    })
  }, [query, users])

  return (
    <MainLayout>
      <div className='mx-auto w-full max-w-5xl'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
            <div>
              <h1 className='text-2xl font-bold tracking-tight text-slate-900'>Manage users</h1>
              <p className='mt-2 text-sm text-slate-600'>
                UI-only view for admins. Later we’ll connect to GET /users (admin only).
              </p>
            </div>
            <div className='flex gap-3'>
              <Link
                to="/admin"
                className='rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200'
              >
                Admin home
              </Link>
              <Link
                to="/"
                className='rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700'
              >
                Back
              </Link>
            </div>
          </div>

          {!allowed ? (
            <div className='mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900'>
              <p className='font-semibold'>Forbidden</p>
              <p className='mt-1'>This area is for admins only.</p>
              <div className='mt-4 flex flex-wrap gap-3'>
                <Link
                  to="/login"
                  className='rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700'
                >
                  Go to login
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                <div className='flex items-center gap-3'>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className='w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 outline-none ring-indigo-600 focus:ring-2 sm:w-80'
                    placeholder='Search by name, email, role...'
                  />
                  <span className='text-sm text-slate-600'>{filtered.length} users</span>
                </div>
                <button
                  type='button'
                  disabled
                  className='rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white opacity-50'
                >
                  Add user
                </button>
              </div>

              <div className='mt-5 overflow-hidden rounded-2xl border border-slate-200'>
                <div className='overflow-x-auto'>
                  <table className='min-w-full divide-y divide-slate-200'>
                    <thead className='bg-slate-50'>
                      <tr>
                        <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600'>Name</th>
                        <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600'>Email</th>
                        <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600'>Role</th>
                        <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600'>Age</th>
                        <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600'>Married</th>
                        <th className='px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-600'>Actions</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200 bg-white'>
                      {filtered.map((u) => {
                        const fullName = `${u.firstName} ${u.lastName}`
                        return (
                          <tr key={u.id} className='hover:bg-slate-50'>
                            <td className='px-4 py-3 text-sm font-medium text-slate-900'>{fullName}</td>
                            <td className='px-4 py-3 text-sm text-slate-700'>{u.email}</td>
                            <td className='px-4 py-3 text-sm'>
                              <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700'>
                                {u.role}
                              </span>
                            </td>
                            <td className='px-4 py-3 text-sm text-slate-700'>{u.age ?? '-'}</td>
                            <td className='px-4 py-3 text-sm text-slate-700'>{u.isMarried ? 'Yes' : 'No'}</td>
                            <td className='px-4 py-3 text-right text-sm'>
                              <div className='flex justify-end gap-2'>
                                <button
                                  type='button'
                                  disabled
                                  className='rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 opacity-50'
                                >
                                  Edit
                                </button>
                                <button
                                  type='button'
                                  disabled
                                  className='rounded-lg border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 opacity-50'
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
