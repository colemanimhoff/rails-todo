
import React from 'react'
import { Card } from 'react-bootstrap'
import moment from 'moment'

import TodoButtons from '../components/TodoButtons'

const TodoCard = ({ fetchTodos, todo }) => {
    return (
        <>
            <Card
                bg="light"
                key={todo.id}
                text="dark"
            >
                <Card.Header>
                    <TodoButtons todo={todo} fetchTodos={fetchTodos} />
                </Card.Header>
                <Card.Body>
                    <Card.Title>{todo.name}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    {moment(todo.created_at).format('LLLL')}
                </Card.Footer>
            </Card>
            <br />
        </>
    )
}

export default TodoCard