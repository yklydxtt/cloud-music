import React from 'react';
import { connect } from 'react-redux';
import style from './style.css';
const Login=(props)=>{
    const getPosition=()=>{
        if(!props.staticContext){
            const left=window.innerHeight
            // console.log(window)
            return {
                left,
                top:'225px'
            }
        }else{
            return {}
        }
        console.log(props,22)
    }
    return(
        <div className={style.login} style={getPosition()}>Login</div>
    )
}
export default connect(null,null)(Login);