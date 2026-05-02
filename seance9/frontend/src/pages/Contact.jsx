import MainLayout from '../layouts/MainLayout'

export default function Contact() {
  return (
    <MainLayout>
        <div className='mx-auto flex w-full max-w-3xl flex-col gap-6'>
          <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h1 className='text-2xl font-bold tracking-tight text-slate-900'>Contact</h1>
            <p className='mt-2 text-sm text-slate-600'>
              This page is UI-only for now. Later we can send this form to a backend endpoint.
            </p>
          </div>

          <form className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div>
                <label className='text-sm font-medium text-slate-700' htmlFor='name'>Name</label>
                <input
                  id='name'
                  name='name'
                  className='mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
                  placeholder='Your name'
                />
              </div>

              <div>
                <label className='text-sm font-medium text-slate-700' htmlFor='email'>Email</label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  className='mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
                  placeholder='you@example.com'
                />
              </div>

              <div className='sm:col-span-2'>
                <label className='text-sm font-medium text-slate-700' htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  className='mt-2 min-h-32 w-full resize-y rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
                  placeholder='Write your message...'
                />
              </div>
            </div>

            <div className='mt-5 flex justify-end'>
              <button
                type='button'
                className='rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700'
              >
                Send
              </button>
            </div>
          </form>
        </div>
    </MainLayout>
  )
}
