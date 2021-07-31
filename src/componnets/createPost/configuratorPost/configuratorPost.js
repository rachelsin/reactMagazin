import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
// import { actions } from '../../redux/actions/action';

function mapStateToProps(state) {
    return {
    };
}

const mapDispatchToProps = (dispatch) => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function ConfiguratorPost(props) {
    console.log('hhh');
    return (
        <>

            <div class="postSettings">
                <div class="img">gfghjk</div>
                <div class="title"></div>
                <div class="description"></div>
                <div class="content"></div>
                <div class="by"></div>
            </div>
        </>
    )
}))


