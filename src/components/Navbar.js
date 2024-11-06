import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, InputGroup, NavDropdown } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa'; 
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import trendyImage from '../assets/trendy-collections.svg'; 
import delivery from '../assets/express-delivery.gif'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

const CustomNavbar = () => {
    const [username, setUsername] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (user) => {
        setUsername(user);
        navigate('/');
    };

    const handleLogout = () => {
        setUsername(null);
        navigate('/');
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">
                <FontAwesomeIcon icon={faBars} style={{ fontSize: '24px', marginRight: '20px', fontWeight: '400' }} />
                <img src={logo} alt="Logo" style={{ width: '150px', marginRight: '15px' }} />
                <img src={trendyImage} alt="Trendy Collections" style={{ width: '30px', marginRight: '5px' }} />
                <span style={{ fontSize: '16px', fontWeight: '400', marginRight: '20px' }}>Trendy Collections</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className="ml-auto d-flex">
                    <InputGroup className="mr-sm-2" style={{ width: '300px', marginRight: '20px' }}>
                        <FormControl 
                            type="text" 
                            placeholder="Search for jewellery" 
                            style={{ borderColor: 'gold', borderRadius: '1.25rem 0 0  1.25rem' }} 
                        />
                        <InputGroup.Text 
                            style={{ 
                                backgroundColor: 'transparent', 
                                border: '1px solid gold', 
                                borderRadius: '0 1.25rem 1.25rem 0' 
                            }}
                        >
                            <FaSearch style={{ color: 'gold' }} />
                        </InputGroup.Text>
                    </InputGroup>
                </Form>
                <Navbar.Brand as={Link} to="/">
                    <img src={delivery} alt="Delivery" style={{ width: '70px', marginRight: '20px' }} />
                </Navbar.Brand>
                <Nav className="ml-3">
                    <NavDropdown
                        title={username ? <span><FaUser style={{ marginRight: '5px' }} /> {username}</span> : <span><FaUser style={{ marginRight: '5px' }} /> SignIn/SignUp</span>}
                        id="basic-nav-dropdown"
                        className="custom-dropdown"
                    >
                        {username ? (
                            <>
                                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </>
                        ) : (
                            <>
                                <h1>Log In or Create </h1>
                                <h1>an Account</h1><br/>
                                <p>With an account you can check out faster, view your online order history and access your shopping bag or saved items from any device.</p>
                                <NavDropdown.Item 
                                    className="dropdown-item-hover" 
                                    onClick={() => handleLogin('User123')} // Simulate login
                                >
                                    <b>Login</b>
                                </NavDropdown.Item>
                                <NavDropdown.Item 
                                    className="dropdown-item-hover" 
                                    onClick={() => navigate('/signup')}
                                >
                                    <b>Create Account</b>
                                </NavDropdown.Item>
                            </>
                        )}
                    </NavDropdown>
                    <Nav.Link as={Link} to="/Wishlist">
                        <FaHeart /> Wishlist
                    </Nav.Link>
                    <Nav.Link as={Link} to="/cart">
                        <FaShoppingCart /> Cart
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
