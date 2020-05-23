
import React, { useState, useEffect } from 'react'
import { Link, useParams, Redirect } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

import { bff } from '../config'

const EditTodoForm = () => {
    const params = useParams()
    const [redirect, setRedirect] = useState(false)
    const [req, setReq] = useState({
        name: '',
        description: ''
    })

    const handleOnChange = (e) => {
        setReq({
            ...req,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(bff + '/todos/' + params.id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(req)
        })
            .then(res => res.json())
            .then(res => {
                setRedirect(true)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch(bff + '/todos/' + params.id)
            .then(res => res.json())
            .then(res => {
                setReq({
                    name: res.data.name,
                    description: res.data.description
                })
            })
            .catch(err => console.log(err))
        return () => {
            setRedirect(false)
            setReq({
                name: '',
                description: ''
            })
        }
    }, [params])

    if (redirect) {
        return <Redirect to="/" />
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="name"
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
                />
            </Form.Group>
            <div>
                <Button block={true} variant="primary" type="submit">Submit</Button>
                <Button as={Link} block={true} variant="secondary" to="/">Cancel</Button>
            </div>
        </Form>
    )
}

export default EditTodoForm