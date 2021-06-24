import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../redux/actions/action'


function CreateUser(props) {

    useEffect(() => {
    }, []);
    const nameRef = useRef('');
    const passwordRef = useRef('');
    const emailRef = useRef('');
    function createUser() {
        let user = { name: nameRef.current.value }
        props.createUser(user);
    }
    return (
        <>
            <div className="container">

                <h1>Create User</h1>
                <form>
                    Name:<input type="text" ref={nameRef}></input>
                    <br></br>
                    Password:<input type="text" ref={passwordRef}></input>
                    <br></br>
                    Email:<input type="text" ref={emailRef}></input>
                    <br></br>
                    <button onClick={createUser}>create User</button>
                </form>
            </div>

        </>
    )

}
export default connect(
    (state) => {
        return {

        }
    },
    (dispatch) => {
        return {
            createUser: (newUser) => dispatch(actions.createUser(newUser))

        }
    }

)(CreateUser)
