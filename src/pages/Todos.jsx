import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../slices/todoSlice'

function Todos() {
    const { todos, loading, error } = useSelector(state => state.todoReducer)
    return (
        <>
            {
                loading && "Loading"
            }
            {
                error && "Error"
            }
            {todos && <ul>
                {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>}

        </>
    )
}

export default Todos