import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand style={{ fontWeight: "bold", color: "#0045FF" }} href="#">PhotoLearning</Navbar.Brand>
                    <Nav className="ms-auto">

                        <NavLink className="mx-2" exact to="/" style={{ fontWeight: "bold", color: "black", textDecoration: "none" }} activeStyle={{ fontWeight: "bold", color: "orange", textDecoration: "none" }}>Home</NavLink>
                        <NavLink className="mx-2" exact to="/about" style={{ fontWeight: "bold", color: "black", textDecoration: "none" }} activeStyle={{ fontWeight: "bold", color: "orange", textDecoration: "none" }}>About Us</NavLink>
                        <NavLink className="mx-2" exact to="/services" style={{ fontWeight: "bold", color: "black", textDecoration: "none" }} activeStyle={{ fontWeight: "bold", color: "orange", textDecoration: "none" }}>Services</NavLink>
                        <NavLink exact to="/instructor" style={{ fontWeight: "bold", color: "black", textDecoration: "none" }} activeStyle={{ fontWeight: "bold", color: "orange", textDecoration: "none" }}>Instructor</NavLink>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;