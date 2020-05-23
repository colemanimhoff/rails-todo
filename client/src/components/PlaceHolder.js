
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const PlaceHolder = ({ type }) => {
    let message
    let buttonText
    let route

    if (type === 'completed') {
        buttonText = 'Check Your Todos'
        message = 'None of your todos are completed. You need to get to work!'
        route = '/todos'
    } else {
        buttonText = 'New Todo'
        message = 'You haven\'t created any todos. Get yourself organized!'
        route = '/new'
    }


    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>
                    <span aria-label="Check" aria-hidden={true} role="img">🤔</span>
                </Card.Title>
                <Card.Text>{message}</Card.Text>
                <Button as={Link} to={route} variant="primary">{buttonText}</Button>
            </Card.Body>
        </Card>
    )

}

export default PlaceHolder