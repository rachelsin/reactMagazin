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
                <div className="container">
                    <Link className=" navbar-brand" to="/">React Project</Link>
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
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-item nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-item nav-link" to="/products">
                                    Shop                                </NavLink>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
})