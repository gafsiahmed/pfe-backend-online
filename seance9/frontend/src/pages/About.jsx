
import MainLayout from '../layouts/MainLayout'

export default function About() {
  return (
    <MainLayout>
        <div className='mx-auto flex w-full max-w-3xl flex-col gap-6'>
          <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h1 className='text-2xl font-bold tracking-tight text-slate-900'>About TodoApp</h1>
            <p className='mt-2 text-sm text-slate-600'>
              This frontend started as a React learning project. It now matches the backend naming (todos) so we can
              connect it to the API next.
            </p>
          </div>

          <div className='grid gap-4 sm:grid-cols-3'>
            <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm'>
              <p className='text-sm font-semibold text-slate-900'>Frontend</p>
              <p className='mt-2 text-sm text-slate-600'>React + React Router + Tailwind</p>
            </div>
            <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm'>
              <p className='text-sm font-semibold text-slate-900'>Backend</p>
              <p className='mt-2 text-sm text-slate-600'>Node/Express + MongoDB (todos)</p>
            </div>
            <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm'>
              <p className='text-sm font-semibold text-slate-900'>Goal</p>
              <p className='mt-2 text-sm text-slate-600'>Real login + CRUD with API</p>
            </div>
          </div>

          <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-lg font-semibold text-slate-900'>Next steps</h2>
            <div className='mt-3 grid gap-3 text-sm text-slate-700'>
              <p>1) Add login flow and store token/user.</p>
              <p>2) Fetch todos from the backend and render them here.</p>
              <p>3) Create/update/delete todos using the API.</p>
            </div>
          </div>
        </div>
    </MainLayout>
   
  )
}
