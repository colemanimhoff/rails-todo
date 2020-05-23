
import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

import { bff } from '../config'

const NewTodoForm = () => {
    const [redirect, setRedirect] = useState(false)
    const [req, setReq] = useState({
        name: '',
        description: '',
        completed: false
    })

    const handleOnChange = (e) => {
        setReq({
            ...req,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(bff + '/todos', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(req)
        })
            .then(res => res.json())
            .then(res => {
                setRedirect(true)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        return () => {
            setRedirect(false)
            setReq({
                name: '',
                description: '',
                completed: false
            })
        }
    }, [])

    if (redirect) {
        return <Redirect to="/" />
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="name"
                    placeholder="Enter name..."
                    onChange={handleOnChange}
                    required
                    type="text"
                    value={req.name}
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Description</Form.Label>
                <Form.Control
                    as="textarea"
                    name="description"
                    onChange={handleOnChange}
                    value={req.description}
                    rows="3"
                    placeholder="Enter description..."
                />
            </Form.Group>
            <div>
                <Button block={true} variant="primary" type="submit">Submit</Button>
                <Button as={Link} block={true} variant="secondary" to="/">Cancel</Button>
            </div>
        </Form>
    )
}

export default NewTodoForm