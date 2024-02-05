"use client";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function Register() {
    return (
    <>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">Cashier App</Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Products</Nav.Link>
                <Nav.Link href="#" className="active">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <Container className="mt-3">
           <Card>
            <Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Tipe Akun</Form.Label>
                <Form.Select>
                    <option>Pilih Role...</option>
                    <option value="admin">Admin</option>
                    <option value="petugas">Petugas</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
            </Card.Body>
           </Card>
        </Container>
        </>
    )
}