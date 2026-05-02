import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

export default function TodoDetailPage() {

    const params = useParams()

  return (
    <MainLayout>
      <div className='mx-auto w-full max-w-3xl'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
          <div className='flex items-center justify-between gap-4'>
            <div>
              <h1 className='text-2xl font-bold tracking-tight text-slate-900'>Todo detail</h1>
              <p className='mt-1 text-sm text-slate-600'>Route param: {params.todoId}</p>
            </div>
            <Link
              to="/"
              className='rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700'
            >
              Back
            </Link>
          </div>

          <div className='mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700'>
            This page will later fetch the todo by id from the backend and display full details here.
          </div>
        </div>
      </div>
    </MainLayout>
 
  
  )
}
