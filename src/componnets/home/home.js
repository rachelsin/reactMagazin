import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { actions } from '../../redux/actions/action';

function mapStateToProps(state) {
    return {
    };
}

const mapDispatchToProps = (dispatch) => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Home(props) {

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#E8EAEC", minHeight: "680px" }}>
                <div className="row">
                    <div className="col-md-3 col-sm-6 m-auto">
                        <div className="center">
                            <h1>Home Page</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}))

