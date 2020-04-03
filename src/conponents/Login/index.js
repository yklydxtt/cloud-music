import React from 'react';
import { connect } from 'react-redux';
import style from './style.css';
const Login = (props) => {
    const getPosition = () => {
        const left = window.innerWidth/2-265
        // console.log(window)
        return {
            left,
            top: '225px'
        }
        // console.log(props,22)
    }
    return (
        <div className={style.login} style={getPosition()}>
            <div className={style.title}>
                <span>登陆</span>
                <span>X</span>
            </div>
        </div>
    )
}
export default connect(null, null)(Login);