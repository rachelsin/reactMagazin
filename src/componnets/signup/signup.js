import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from "react-router-dom";
// import cssSignup from "./cssSignup";
import { actions } from '../../redux/actions/action';
import userService from '../../redux/middleware/userCrud';


const mapDispatchToProps = (dispatch) => ({
    addUser: (data) => dispatch(actions.signup(data)),
})

export default withRouter(connect(null, mapDispatchToProps)(function Signup(props) {

    const passwordRef = useRef('');
    const emailRef = useRef('');
    const nameRef = useRef('');

    async function handleSubmit(e) {
        e.preventDefault();
        let data = { email: emailRef.current.value, password: passwordRef.current.value, name: nameRef.current.value };
        try {
            await props.addUser(data);
            props.history.push('/login')
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
                                <h1>Sign up</h1>
                                <p class="text-muted"> You can open new account for free!</p>
                                <form onSubmit={handleSubmit} autoComplete="off" method="POST">
                                    <input type="email" className="form-control" id="email" placeholder="Email" ref={emailRef} />
                                    <input type="password" className="form-control mt-1" id="password" placeholder="Password" ref={passwordRef} />
                                    <input type="name" className="form-control mt-1" id="name" placeholder="Name" ref={nameRef} />
                                    <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}))

