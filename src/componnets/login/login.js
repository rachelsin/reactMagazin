import React ,{useEffect}from 'react'
import {connect} from 'react-redux'
import { actions } from '../../redux/actions/action'


 function Login(props){
  
useEffect(()=>{
    props.creatMagazin()
},[]);
        return(
            <>
        <h1>hello to all</h1>
       
        </>
        )
    
}
export default connect(
    (state)=>{
        return{

        }
    },
    (dispatch)=>{
        return{
            creatMagazin:()=>dispatch(actions.creatMagazin())
        }
    }

)(Login)
