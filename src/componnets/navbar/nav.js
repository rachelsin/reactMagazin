import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


function mapStateToProps(state) {
    return {
        // cart: state.shop.cart,
    };
}

export default connect(mapStateToProps)(function Navi(props) {



    return (
        <>
            <Navbar bg="white" expand="lg" className="shadow-sm">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        
                        {/* <Nav.Link href="#link">Link</Nav.Link> */} 
                        {/* <i className="fas fa-user-circle fa-2x"></i> */}<span className="fas fa-user-circle fa-2x"></span>
                        <NavDropdown align="start" drop="" title="" id="basic-nav-dropdown" className="" key="start">
                            
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">
                            <i class="fas fa-thumbtack fa-2x"></i>
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <i class="fas fa-bars fa-2x"></i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
})