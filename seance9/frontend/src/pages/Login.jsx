import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem(
      'demo_auth',
      JSON.stringify({
        email: formData.email,
        role: formData.role,
      }),
    )
    setSubmitted(true)
    navigate(formData.role === 'admin' ? '/admin' : '/')
  }

  return (
    <MainLayout>
      <div className='mx-auto w-full max-w-3xl'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <h1 className='text-2xl font-bold tracking-tight text-slate-900'>Login</h1>
              <p className='mt-2 text-sm text-slate-600'>
                Frontend only for now. Later we’ll connect this form to the backend.
              </p>
            </div>
            <Link
              to="/register"
              className='rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200'
            >
              Create account
            </Link>
          </div>

          {submitted && (
            <div className='mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900'>
              Login form submitted (no backend call yet).
            </div>
          )}

          <form onSubmit={handleSubmit} className='mt-6 grid gap-4 sm:grid-cols-2'>
            <div className='sm:col-span-2'>
              <label className='text-sm font-medium text-slate-700' htmlFor='email'>
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                required
                value={formData.email}
                onChange={handleChange}
                className='mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
                placeholder='you@example.com'
              />
            </div>

            <div className='sm:col-span-2'>
              <label className='text-sm font-medium text-slate-700' htmlFor='role'>
                Role (demo)
              </label>
              <select
                id='role'
                name='role'
                value={formData.role}
                onChange={handleChange}
                className='mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
              >
                <option value="user">user</option>
                <option value="admin">admin</option>
              </select>
            </div>

            <div className='sm:col-span-2'>
              <label className='text-sm font-medium text-slate-700' htmlFor='password'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                required
                value={formData.password}
                onChange={handleChange}
                className='mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
                placeholder='••••••••'
              />
            </div>

            <div className='sm:col-span-2 flex items-center justify-between gap-3'>
              <Link to="/" className='text-sm font-medium text-slate-700 hover:text-indigo-700'>
                Back to todos
              </Link>
              <button
                type='submit'
                className='rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}
