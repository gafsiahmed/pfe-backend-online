import React, { useState } from 'react'

export default function TodoForm({setTodos}) {



    const [formData, setFormData] = useState({
            title : '',
            priority : 'low',
            category : 'work',
            status: 'pending',
            description : ''
    })


    function handleChange(e){
    const {name,value} = e.target
    setFormData((prev)=>{
        return {
            ...prev,
            [name] : value
        }
    })

    }

  
    function handleSubmit(e){
        e.preventDefault()
        let newTodo = {
            id : Date.now(),
            ...formData,
            completed: formData.status === 'completed',
        }
      
        setTodos((prev)=>{
            return [...prev,newTodo]
        })

        // reset the form 
        setFormData({
            title : '',
            priority : 'low',
            category : 'work',
            status: 'pending',
            description : ''
        })




    }
  
  
return (
    <>
    <form 
    onSubmit={handleSubmit}
    className='w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'
    >
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold text-slate-900'>New todo</h3>
        <p className='text-xs text-slate-500'>In-memory only</p>
      </div>

      <div className='mt-5 grid gap-4 sm:grid-cols-2'>
        <div className='sm:col-span-2'>
          <label htmlFor="title" className='text-sm font-medium text-slate-700'>Title</label>
          <input
          type="text"
          id='title'
          name='title'
          value={formData.title}
          className='mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
          placeholder='e.g. Finish the React lesson'
          required
          onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="priority" className='text-sm font-medium text-slate-700'>Priority</label>
          <select 
          name="priority" 
          id="priority"
          value={formData.priority}
          className='mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
          onChange={handleChange}
          >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
          </select>
        </div>

        <div>
          <label htmlFor="status" className='text-sm font-medium text-slate-700'>Status</label>
          <select
          name="status"
          id="status"
          value={formData.status}
          className='mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
          onChange={handleChange}
          >
              <option value="pending">Pending</option>
              <option value="in-progress">In progress</option>
              <option value="completed">Completed</option>
          </select>
        </div>

        <div className='sm:col-span-2'>
          <label htmlFor="category" className='text-sm font-medium text-slate-700'>Category</label>
          <select 
          name="category" 
          id="category"
          value={formData.category}
          className='mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
          onChange={handleChange}
          >
              <option value="work">Work</option>
              <option value="study">Study</option>
              <option value="fun">Fun</option>
              <option value="personal">Personal</option>
          </select>
        </div>

        <div className='sm:col-span-2'>
          <label htmlFor="description" className='text-sm font-medium text-slate-700'>Description</label>
          <textarea 
          name="description" 
          id="description"
          value={formData.description}
          className='mt-2 min-h-28 w-full resize-y rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none ring-indigo-600 focus:ring-2'
          placeholder='What needs to be done?'
          required
          onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <div className='mt-5 flex items-center justify-end gap-3'>
        <button
        type="submit"
        className='rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700'
        >
          Add Todo
        </button>
      </div>
    </form>

    
    </>
  )
}
