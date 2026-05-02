import React, { useState } from 'react'
import TodoForm from './TodosForm'
import TodoList from './TodosList'



export default function Todos() {
   const [todos,setTodos] = useState([])
   const [showForm, setShowForm] = useState(false)

   const completedCount = todos.filter((t) => t.completed).length
   const pendingCount = todos.length - completedCount

  return (
    <div className='mx-auto flex w-full max-w-3xl flex-col items-stretch gap-6'>
      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight text-slate-900'>Todo App</h1>
            <p className='mt-1 text-sm text-slate-600'>
              Create todos in memory for now. Next step: connect to the backend API.
            </p>
          </div>

          <button
          type="button"
          className='rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700'
          onClick={()=>{
                 setShowForm((prev)=> !prev)
          }}
          >
            {showForm ? 'Hide Form' : 'Add Todo'}
          </button>
        </div>

        <div className='mt-5 grid grid-cols-3 gap-3'>
          <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
            <p className='text-xs font-medium text-slate-600'>Total</p>
            <p className='mt-1 text-2xl font-bold text-slate-900'>{todos.length}</p>
          </div>
          <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
            <p className='text-xs font-medium text-slate-600'>Pending</p>
            <p className='mt-1 text-2xl font-bold text-slate-900'>{pendingCount}</p>
          </div>
          <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
            <p className='text-xs font-medium text-slate-600'>Completed</p>
            <p className='mt-1 text-2xl font-bold text-slate-900'>{completedCount}</p>
          </div>
        </div>
      </div>

     { showForm && <TodoForm setTodos={setTodos}/>}

      <TodoList todos={todos}/>
    </div>
  )
}
