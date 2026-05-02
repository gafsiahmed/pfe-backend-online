import { useState } from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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
    setSubmitted(true)
  }

  return (
    <MainLayout>
      <div className='mx-auto w-full max-w-3xl'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <h1 className='text-2xl font-bold tracking-tight text-slate-900'>Register</h1>
              <p className='mt-2 text-sm text-slate-600'>
                Frontend only for now. This form matches the backend fields: firstName, lastName, email, password.
              </p>
            </div>
            <Link
              to="/login"
              className='rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200'
            >
              I have an account
            </Link>
          </div>

          {submitted && (
            <div className='mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900'>
              Register form submitted (no backend call yet).
            </div>
          )}

          <form onSubmit={handleSubmit} className='mt-6 grid gap-4 sm:grid-cols-2'>
            <div>
              <label className='text-sm font-medium text-slate-700' htmlFor='firstName'>
                First name
              </label>
              <input
                id='firstName'
                name='firstName'
                required
                value={formData.firstName}
                onChange={handleChange}
                className='mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
                placeholder='Ahmed'
              />
            </div>

            <div>
              <label className='text-sm font-medium text-slate-700' htmlFor='lastName'>
                Last name
              </label>
              <input
                id='lastName'
                name='lastName'
                required
                value={formData.lastName}
                onChange={handleChange}
                className='mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
                placeholder='Gafsi'
              />
            </div>

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
              <p className='mt-2 text-xs text-slate-500'>
                Password rules will be enforced by the backend later.
              </p>
            </div>

            <div className='sm:col-span-2 flex items-center justify-between gap-3'>
              <Link to="/" className='text-sm font-medium text-slate-700 hover:text-indigo-700'>
                Back to todos
              </Link>
              <button
                type='submit'
                className='rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700'
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}
