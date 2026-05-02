import Navbar from '../components/Navbar'
import Footer from '../components/Footer'




export default function MainLayout({children}) {

  return (
    <div className='min-h-screen flex flex-col bg-slate-50 text-slate-900'>
        <Navbar/>
        <main className='flex-1 w-full'>
          <div className='mx-auto w-full max-w-5xl px-4 py-8'>
              {children}
          </div>
        </main>
        <Footer/>
    </div>
  )
}
