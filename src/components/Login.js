import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // API call for login
        axios.post('http://localhost:5000/api/user/login', { email, password })
            .then((result) => {
                setSuccess('Login successful!');
                setTimeout(() => {
                    navigate('/'); // Redirect to home page after successful login
                }, 2000); // Delay for 2 seconds
            })
            .catch((err) => {
                if (err.response) {
                    setError(`Error: ${err.response.data.message || 'Login failed.'}`);
                } else {
                    setError('An unexpected error occurred.');
                }
            });
    };

    return (
        <Container className="mt-5" style={{ maxWidth: '400px' }}>
            <h2 className="text-center">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit" block>
                    Login
                </Button>
            </Form>
            <p className="text-center mt-3">
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </Container>
    );
};

export default LoginPage;
