import MainLayout from '../layouts/MainLayout'

export default function Service() {
  return (
    <MainLayout>
        <div className='mx-auto flex w-full max-w-3xl flex-col gap-6'>
          <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h1 className='text-2xl font-bold tracking-tight text-slate-900'>Services</h1>
            <p className='mt-2 text-sm text-slate-600'>
              What this app will support once we connect the frontend to the backend.
            </p>
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
              <p className='text-sm font-semibold text-slate-900'>Authentication</p>
              <p className='mt-2 text-sm text-slate-600'>Login, store token, protect routes.</p>
            </div>
            <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
              <p className='text-sm font-semibold text-slate-900'>Todo CRUD</p>
              <p className='mt-2 text-sm text-slate-600'>Create, list, read details, update, delete.</p>
            </div>
            <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
              <p className='text-sm font-semibold text-slate-900'>Filtering</p>
              <p className='mt-2 text-sm text-slate-600'>By status, category, priority.</p>
            </div>
            <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
              <p className='text-sm font-semibold text-slate-900'>User experience</p>
              <p className='mt-2 text-sm text-slate-600'>Loading states, errors, and empty states.</p>
            </div>
          </div>
        </div>
    </MainLayout>
  )
}
