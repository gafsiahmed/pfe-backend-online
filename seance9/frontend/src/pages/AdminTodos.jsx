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

export default function AdminTodos() {
  const allowed = isAdmin()

  const [status, setStatus] = useState('all')
  const [priority, setPriority] = useState('all')
  const [query, setQuery] = useState('')

  const todos = useMemo(() => {
    return [
      {
        id: 't1',
        title: 'Prepare lesson',
        description: 'Slides + examples for React router',
        category: 'study',
        status: 'in-progress',
        priority: 'high',
        completed: false,
        owner: { fullName: 'Rania Manna', email: 'rania@example.com' },
        createdAt: '2026-05-01',
      },
      {
        id: 't2',
        title: 'Fix backend endpoint',
        description: 'Add admin route for all todos (later)',
        category: 'work',
        status: 'pending',
        priority: 'medium',
        completed: false,
        owner: { fullName: 'Ahmed Gafsi', email: 'ahmed@example.com' },
        createdAt: '2026-05-02',
      },
      {
        id: 't3',
        title: 'Buy groceries',
        description: 'Milk, bread, fruit',
        category: 'personal',
        status: 'completed',
        priority: 'low',
        completed: true,
        owner: { fullName: 'Sarra Ben Ali', email: 'sarra@example.com' },
        createdAt: '2026-04-30',
      },
    ]
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return todos.filter((t) => {
      const matchStatus = status === 'all' ? true : t.status === status
      const matchPriority = priority === 'all' ? true : t.priority === priority
      const matchQuery = !q
        ? true
        : t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.owner.fullName.toLowerCase().includes(q) ||
          t.owner.email.toLowerCase().includes(q)
      return matchStatus && matchPriority && matchQuery
    })
  }, [priority, query, status, todos])

  return (
    <MainLayout>
      <div className='mx-auto w-full max-w-5xl'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
            <div>
              <h1 className='text-2xl font-bold tracking-tight text-slate-900'>Manage todos</h1>
              <p className='mt-2 text-sm text-slate-600'>
                UI-only admin view. Later we can add a backend endpoint for “all todos”.
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
              <div className='mt-6 grid gap-3 sm:grid-cols-4'>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className='sm:col-span-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
                  placeholder='Search title, description, owner...'
                />
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className='w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
                >
                  <option value="all">All status</option>
                  <option value="pending">Pending</option>
                  <option value="in-progress">In progress</option>
                  <option value="completed">Completed</option>
                </select>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className='w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
                >
                  <option value="all">All priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className='mt-4 flex items-center justify-between'>
                <p className='text-sm text-slate-600'>{filtered.length} todos</p>
                <button
                  type='button'
                  disabled
                  className='rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white opacity-50'
                >
                  Create todo
                </button>
              </div>

              <div className='mt-5 overflow-hidden rounded-2xl border border-slate-200'>
                <div className='overflow-x-auto'>
                  <table className='min-w-full divide-y divide-slate-200'>
                    <thead className='bg-slate-50'>
                      <tr>
                        <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600'>Title</th>
                        <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600'>Owner</th>
                        <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600'>Status</th>
                        <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600'>Priority</th>
                        <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600'>Category</th>
                        <th className='px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-600'>Actions</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200 bg-white'>
                      {filtered.map((t) => {
                        return (
                          <tr key={t.id} className='hover:bg-slate-50'>
                            <td className='px-4 py-3'>
                              <p className='text-sm font-medium text-slate-900'>{t.title}</p>
                              <p className='mt-1 line-clamp-1 text-xs text-slate-600'>{t.description}</p>
                            </td>
                            <td className='px-4 py-3 text-sm text-slate-700'>
                              <p className='font-medium text-slate-900'>{t.owner.fullName}</p>
                              <p className='text-xs text-slate-600'>{t.owner.email}</p>
                            </td>
                            <td className='px-4 py-3 text-sm'>
                              <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700'>
                                {t.status}
                              </span>
                            </td>
                            <td className='px-4 py-3 text-sm'>
                              <span className='rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700'>
                                {t.priority}
                              </span>
                            </td>
                            <td className='px-4 py-3 text-sm text-slate-700'>{t.category}</td>
                            <td className='px-4 py-3 text-right text-sm'>
                              <div className='flex justify-end gap-2'>
                                <button
                                  type='button'
                                  disabled
                                  className='rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 opacity-50'
                                >
                                  View
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
