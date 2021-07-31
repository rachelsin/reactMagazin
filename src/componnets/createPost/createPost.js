import React, { useEffect } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { actions } from '../../redux/actions/action'
import Configurator from '../configurator/configurator'
function CreatePost(props) {
    
    useEffect(() => {

    }, []);
    return (
        <>
            <Configurator page="createPost"/>
            <Navbar></Navbar>
            <h1>CreatePost</h1>


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

        }
    }

)(CreatePost)
