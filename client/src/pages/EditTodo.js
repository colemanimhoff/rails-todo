
import React from 'react'
import { Container } from 'react-bootstrap'

import EditTodoForm from '../components/EditTodoForm'
import NavBar from '../components/NavBar'

const EditTodo = () => {
    return (
        <Container>
            <NavBar />
            <h1>Edit</h1>
            <EditTodoForm />
        </Container>
    )
}

export default EditTodo