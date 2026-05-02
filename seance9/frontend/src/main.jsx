import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import Service from './pages/Service.jsx'
import About from './pages/About.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Home from './pages/Home.jsx'
import TodoDetailPage from './pages/NoteDetailPage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AdminUsers from './pages/AdminUsers.jsx'
import AdminTodos from './pages/AdminTodos.jsx'



const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/about',
    element : <About/>
  },
  {
    path : '/todo/:todoId',
    element : <TodoDetailPage/>
  },
  {
    path : '/login',
    element : <Login/>
  },
  {
    path : '/register',
    element : <Register/>
  },
  {
    path : '/admin',
    element : <AdminDashboard/>
  },
  {
    path : '/admin/users',
    element : <AdminUsers/>
  },
  {
    path : '/admin/todos',
    element : <AdminTodos/>
  },
   {
    path : '/contact',
    element : <Contact/>
  },
   {
    path : '/service',
    element : <Service/>
  },
   {
    path : '*',
    element : <NotFoundPage/>
  }
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
 
