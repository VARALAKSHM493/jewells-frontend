import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaHeadset } from 'react-icons/fa'; // Headset icon
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Lowernavbar.css'; // Create a CSS file for styling

const LowerNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="lower-navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Gold Jewellery" id="gold-dropdown">
                        <NavDropdown.Item href="#action/1">Earrings</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Rings</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Bangles</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Jhumkass</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Bracelets</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Diamond Jewellery" id="diamond-dropdown">
                    <NavDropdown.Item href="#action/1">Earrings</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Rings</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Bangles</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Jhumkass</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Bracelets</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Platinum Jewellery" id="platinum-dropdown">
                    <NavDropdown.Item href="#action/1">Bracelets</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Rings</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Bangles</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Jhumkass</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Earrings</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Gold Coins" id="gold-coins-dropdown">
                        <NavDropdown.Item href="#action/1"><b>Goldpurity</b></NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">22carats</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">24carats</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Kids Jewellery" id="kids-dropdown">
                        <NavDropdown.Item href="#action/2">Pendants</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Rings</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Bangles</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Jhumkass</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Earrings</NavDropdown.Item>  
                    </NavDropdown>
                    <NavDropdown title="Our Brands" id="brands-dropdown">
                    <NavDropdown.Item href="#action/2">Pendants</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Rings</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Bangles</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Jhumkass</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Earrings</NavDropdown.Item> 
                    </NavDropdown>
                </Nav>
                <div className="contact-info">
                    <FaHeadset style={{ marginRight: '5px' }} />
                    <span>1800 212 4558 (Toll Free)</span>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default LowerNavbar;
