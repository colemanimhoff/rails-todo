
import React from 'react'
import { Container } from 'react-bootstrap'

import NavBar from '../components/NavBar'
import NewTodoForm from '../components/NewTodoForm'

const NewTodo = () => {
    return (
        <Container>
            <NavBar />
            <h1>New Todo</h1>
            <NewTodoForm />
        </Container>
    )
}

export default NewTodo