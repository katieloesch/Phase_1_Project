
import React from 'react'
import { useState } from 'react'

export default function NewToDoForm({ addTodo }) {
    const [newTodo, setNewTodo] = useState('')

    function handleAddTodo(e) {
        e.preventDefault()
        addTodo({text: newTodo, completed: false})
        setNewTodo('')
        
    }

  return (
    <>
        <h2 className="h2">New To-Do</h2>
        <form className="form" onSubmit={handleAddTodo}>
            <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="add new task..."
            required={true}
            className="input"
            />
            <button className='btn-submit' type="submit">add</button>
        </form>
    </>
  )
}
