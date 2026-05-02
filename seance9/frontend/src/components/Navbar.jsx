import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {


  const navigate = useNavigate()
  let role = ''
  try {
    const raw = localStorage.getItem('demo_auth')
    if (raw) role = String(JSON.parse(raw)?.role || '')
  } catch {
    role = ''
  }
  const isAdmin = role.toLowerCase() === 'admin'
  const isLoggedIn = Boolean(role)

    const handleClick = (e)=>{
      e.preventDefault()
      navigate("/")
    }

    const handleLogout = ()=>{
      localStorage.removeItem('demo_auth')
      navigate('/')
    }

  return (
    <nav className='sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-4'>
          <h1
          className='cursor-pointer text-xl font-bold tracking-tight text-slate-900'
          onClick={handleClick}
          >
            TodoApp
          </h1>

          <ul className='flex items-center gap-4 text-sm'>
              <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 transition ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`
              }
              >
                Todos
              </NavLink>
              <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 transition ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`
              }
              >
                About
              </NavLink>
              <NavLink
              to="/contact"
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 transition ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`
              }
              >
                Contact
              </NavLink>
              <NavLink
              to="/service"
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 transition ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`
              }
              >
                Services
              </NavLink>
              {isAdmin && (
                <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 transition ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`
                }
                >
                  Admin
                </NavLink>
              )}
              {isLoggedIn ? (
                <li>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className='rounded-xl bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-700'
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                      <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        `rounded-xl border border-slate-300 px-4 py-2 font-medium transition ${isActive ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-900 hover:bg-slate-100'}`
                      }
                      >
                        Register
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        `rounded-xl bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-700 ${isActive ? 'ring-2 ring-slate-900 ring-offset-2 ring-offset-white' : ''}`
                      }
                      >
                        Login
                      </NavLink>
                  </li>
                </>
              )}
          </ul>
      </div>
    </nav>
  )
}
