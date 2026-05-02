import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

export default function NotFoundPage() {
  return (
    <MainLayout>
      <div className='mx-auto flex w-full max-w-3xl flex-col items-center gap-6 py-10 text-center'>
          <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
            <h1 className='text-3xl font-bold tracking-tight text-slate-900'>404</h1>
            <p className='mt-2 text-sm text-slate-600'>Sorry, the page you are looking for does not exist.</p>

            <div className='mt-6 flex justify-center'>
              <Link
                to="/"
                className='rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700'
              >
                Go home
              </Link>
            </div>
          </div>

          <img
            className='h-52 w-52 rounded-3xl border border-slate-200 object-cover shadow-sm'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6b45lUtdGYTCROuMkqfEiBKtvfB8_tudCw&s"
            alt="not found"
          />
      </div>
    </MainLayout>
  )
}
