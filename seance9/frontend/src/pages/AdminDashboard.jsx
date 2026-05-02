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

export default function AdminDashboard() {
  const allowed = isAdmin()

  return (
    <MainLayout>
      <div className='mx-auto w-full max-w-4xl'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <h1 className='text-2xl font-bold tracking-tight text-slate-900'>Admin</h1>
              <p className='mt-2 text-sm text-slate-600'>Manage users and view all todos.</p>
            </div>
            <Link
              to="/"
              className='rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200'
            >
              Back to app
            </Link>
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
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <Link
                to="/admin/users"
                className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'
              >
                <p className='text-sm font-semibold text-slate-900'>Manage users</p>
                <p className='mt-2 text-sm text-slate-600'>Based on GET /users (admin only).</p>
              </Link>

              <Link
                to="/admin/todos"
                className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'
              >
                <p className='text-sm font-semibold text-slate-900'>Manage todos</p>
                <p className='mt-2 text-sm text-slate-600'>Based on the Todo model (admin view).</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
