import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        // cart: state.shop.cart,
    };
}

export default connect(mapStateToProps)(function Navbar(props) {



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                <div className="container-fluid">
                    <Link className=" navbar-brand" to="/"></Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse row justify-content-between" id="navbarNav">
                        <ul className="navbar-nav col-auto ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">

                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item" to="/">Action</NavLink>
                                    <NavLink className="dropdown-item" to="/">Another action</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" to="/">Something else here</NavLink>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav col-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-user-circle fa-2x">
                                    </i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    data-toggle="dropdown"
                                // aria-haspopup="true"
                                // aria-expanded="false"
                                >
                                    Hi, rachel
                                </NavLink>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <NavLink className="nav-link" to="/">
                                        My Account
                                    </NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="nav-link" to="/">
                                        Logout
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <i class="fas fa-thumbtack fa-2x"></i>                               </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <i class="fas fa-bars fa-2x"></i>                              </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
})