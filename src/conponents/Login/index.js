import React, { useState } from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import style from './style.css';
import img from './platform.png'
const Login = (props) => {
    const [input, setInput] = useState(false)
    const [view,setView] =useState(false)
    const getPosition = () => {
        const left = -635 - 200
        return {
            x: left,
            y: 150
        }
    }
    const handleLogin = () => {
        if(input){
            setView(false)
        }else{
            setView(true)
            setTimeout(() => {
                setView(false)
            }, 5000);
        }
    }
    const handleCheck=()=>{
        setInput(!input);
        if(!input){
            setView(false)
        }
    }
    return (
        <div>
            <Draggable
                handle=".handle"
                defaultPosition={getPosition()}
                position={null}
                scale={1}
            >
                <div className='handle' id="222">
                    <div className={style.login}
                    >

                        <div className={style.title}>
                            <span>登陆</span>
                            <a onClick={props.view}>X</a>
                        </div>
                        <div className={style.main}>
                            <div className={style.rightpart}>
                                <img src={img} />
                                <a onClick={()=>{handleLogin('phone')}}>手机号登录</a>
                                <a>注册</a>
                            </div>
                            <div className={style.leftpart}>
                                <ul>
                                    <li><a><i></i>微信登录</a></li>
                                    <li><a><i style={{ backgroundPosition: '70% 82.5%' }}></i>QQ登录</a></li>
                                    <li><a><i style={{ backgroundPosition: '85% 82.5%' }}></i>微博登录</a></li>
                                    <li><a><i style={{ backgroundPosition: '99.5% 82.5%' }}></i>网易邮箱账号登录</a></li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ paddingLeft: '35px' }}><input type="checkbox" onChange={handleCheck} />同意 《服务条款》 《隐私政策》 《儿童隐私政策》</div>
                    </div>
                </div>
            </Draggable >
            {view?<div className={style.toast}>请先勾选：同意 《服务条款》 《隐私政策》 《儿童隐私政策》</div>:null}
        </div>
    )
}
export default connect(null, null)(Login);