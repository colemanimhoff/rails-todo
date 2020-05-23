
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import NavBar from '../components/NavBar'
import PlaceHolder from '../components/PlaceHolder'
import TodoCard from '../components/TodoCard'

import { bff } from '../config'

const Todos = () => {
    const [todos, setTodos] = useState([])

    const fetchTodos = () => {
        fetch(bff + '/todos?completed=false', {
            'Access-Control-Allow-Origin': '*'
        })
            .then(res => res.json())
            .then(res => setTodos(res.data))
            .catch(res => console.log(res))
    }

    useEffect(() => {
        fetchTodos()
        return () => setTodos([])
    }, [])

    return (
        <Container>
            <NavBar />
            <h1>Todos</h1>
            {todos.length > 0
                ? (
                    todos.map(todo => {
                        return <TodoCard
                            fetchTodos={fetchTodos}
                            key={todo.id}
                            todo={todo} />
                    })
                )
                : (<PlaceHolder type="todos" />)
            }
        </Container>
    )
}

export default Todos