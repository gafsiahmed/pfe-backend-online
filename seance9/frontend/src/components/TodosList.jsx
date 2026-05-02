import React from 'react'
import { Link } from 'react-router-dom'

export default function TodoList({todos}) {


  return (
   <div className='w-full max-w-3xl'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold'>Your todos</h2>
          <p className='text-sm text-slate-600'>{todos.length} total</p>
        </div>

        {todos.length === 0 ? (
          <div className='mt-4 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600'>
            <p className='font-medium text-slate-900'>No todos yet</p>
            <p className='mt-1 text-sm'>Click “Add Todo” to create your first task.</p>
          </div>
        ) : (
          <div className='mt-4 flex flex-col gap-4'>
            {todos.map((todo)=> {
                const priorityColor =
                  todo.priority === 'high'
                    ? 'border-red-300'
                    : todo.priority === 'medium'
                      ? 'border-orange-300'
                      : 'border-emerald-300'

                return (
                    <Link
                    key={todo.id}
                    to={`/todo/${todo.id}`}
                    className={`group rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${priorityColor}`}
                    >
                      <div className='flex items-start justify-between gap-4'>
                        <div className='min-w-0'>
                          <p className='truncate text-lg font-semibold text-slate-900 group-hover:text-indigo-700'>
                            {todo.title || 'Untitled'}
                          </p>
                          <p className='mt-1 line-clamp-2 text-sm text-slate-600'>{todo.description || 'No description'}</p>
                        </div>

                        <div className='flex shrink-0 flex-col items-end gap-2'>
                          <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700'>
                            {todo.category}
                          </span>
                          <span className='rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700'>
                            {todo.priority}
                          </span>
                        </div>
                      </div>
                    </Link>
                )
            })}
          </div>
        )}
    </div>
  )
}
