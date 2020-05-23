
import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonGroup, Button } from 'react-bootstrap'

import { bff } from '../config'

const TodoButtons = ({ todo, fetchTodos }) => {
    const handleComplete = (todoId) => {
        return fetch(bff + '/todos/' + todoId, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({ completed: !todo.completed })
        })
            .then(fetchTodos)
    }

    const handleDelete = (todoId) => {
        return fetch(bff + '/todos/' + todoId, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
            .then(fetchTodos)
    }

    return (
        <ButtonGroup className="todo-buttons">
            {!todo.completed
                ? (
                    <>
                        <div>
                            <Button
                                className="complete-todo-button"
                                onClick={() => handleComplete(todo.id)}
                                variant="outline-primary">
                                Complete
                            </Button>
                        </div>
                        <div className="right-todo-buttons">
                            <Button
                                as={Link}
                                to={"/" + todo.id + "/edit"}
                                variant="outline-success">
                                Edit
                            </Button>
                            <Button
                                onClick={() => handleDelete(todo.id)}
                                variant="outline-danger">
                                Delete
                            </Button>
                        </div >
                    </>
                )
                : (
                    <div>
                        <Button
                            className="complete-todo-button"
                            onClick={() => handleComplete(todo.id)}
                            variant="outline-primary">
                            Put Back
                        </Button>
                    </div>
                )}
        </ButtonGroup >
    )
}

export default TodoButtons
