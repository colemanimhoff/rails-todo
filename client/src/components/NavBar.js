
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Nav className="nav-bar" defaultActiveKey="/" as="ul">
            <div className="nav-links-left" >
                <Nav.Item as="li">
                    <Nav.Link>
                        <span aria-label="Check" aria-hidden={true} role="img">✅</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as={Link} to="/">Todos</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as={Link} to="/completed">Completed</Nav.Link>
                </Nav.Item>
            </div>
            <Nav.Item as="li">
                <Nav.Link as={Link} to="/new">New Todo</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar