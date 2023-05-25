import React from 'react'
import { useSelector } from 'react-redux'

function TodoLength() {
    const { todos } = useSelector(state => state.todoReducer)
    return (
        todos && <h1>TodoLength :  {todos.length > 0 && todos.length}</h1>
    )
}

export default TodoLength