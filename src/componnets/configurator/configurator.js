import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { actions } from '../../redux/actions/action'
import './configurator.style.css'
import ConfiguratorPost from '../createPost/configuratorPost/configuratorPost';

export default function Configurator(props) {
    useEffect(() => {

    }, []);
    const renderComponnent=()=>{
        
        switch (props.page) {
            case 'createPost':
                return <ConfiguratorPost></ConfiguratorPost>
                break;
        
            default:
                break;
        }
    }
    return (
        <div class="configurator">
            <h1>configurator</h1>

    {renderComponnent()}   
            <button id="save"> save</button>
        </div>
    )

}
    

