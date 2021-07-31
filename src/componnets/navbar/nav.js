import React, { useState, useEffect } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';

import image1 from "../../images/image-nav.svg";
import image2 from "../../images/logoo.png";

import navCss from "./navCss";


function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(function MyNavbar(props) {
    const { user } = props

    return (
        <>
            <Navbar bg="white" expand="lg" className="shadow-sm">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="">
                                <img src={image2} width="42px"></img>
                            </NavLink>
                        </li>
                    </Nav>
                    <Nav className="ml-auto">
                        {!user && (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/signup">Signup</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="">/</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                            </>
                        )}
                        <div className="">
                            <NavLink className="nav-link dropdown float-right" to="">
                                <i className="fas fa-user-circle fa-2x" style={{ color: "#3A405E" }}></i>
                                <div className="dropdownContent">
                                    <div className="container my-3">
                                        <div className="row">
                                            <div className="col-2 align-self-center">
                                                <i className="fas fa-user-circle fa-2x" style={{ color: "#6C6CCE" }}></i>
                                            </div>
                                            <div className="col-6 align-self-center">
                                                <span><b>Rachel</b></span>
                                                <p>rachel@gmail.com</p>
                                            </div>
                                            <div className="col-4 align-self-center">
                                                <Link to="/logout" className="btn btn-outline-secondary nav-link"> Logout</Link>
                                                {/* <button type="button" className="btn btn-outline-secondary" onClick={() => props.history.push('/logout')} >Logout</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <img src={image1}></img>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <i className="fas fa-bars fa-2x" style={navCss.colorGrey}></i>
                            </NavLink>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
})