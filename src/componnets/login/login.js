import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../redux/actions/action'
import { Redirect, withRouter } from "react-router-dom";
import userService from '../../redux/middleware/userCrud';


const mapDispatchToProps = (dispatch) => ({
    signIn: (data) => dispatch(actions.login(data)),
})

export default withRouter(connect(null, mapDispatchToProps)(function Login(props) {
    // const [user, setUser] = useState(true)
    const passwordRef = useRef('');
    const emailRef = useRef('');

    async function handleSubmit(e) {
        e.preventDefault();
        let data = { email: emailRef.current.value, password: passwordRef.current.value };
        try {
            await props.signIn(data);
            window.location = "/";
        } catch (err) {
            console.log('error', err);
        }
    }
    return (
        <>
            {userService.getCurrentUser() ?
                <Redirect to="/" /> :
                <div className="container-fluid" style={{ backgroundColor: "#E8EAEC", minHeight: "680px" }}>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 m-auto">
                            <div className="center">
                                <h1>Login</h1>
                                <p className="text-muted"> You can login here with your account!</p>
                                <form onSubmit={handleSubmit} autoComplete="off" method="POST">
                                    <input type="email" className="form-control" id="email" placeholder="Email" ref={emailRef} />
                                    <input type="password" className="form-control mt-1" id="password" placeholder="Password" ref={passwordRef} />
                                    <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}))


