import React from 'react';
import { Link } from 'react-router-dom'
import style from './style.css';
const Header = (props) => {
    if (props.staticContext) {
        props.staticContext.css.push(style._getCss())
    }
    return (
        <div className={style.header}>
            <div className={style.wrap}>
                <h1 className={style.logo}>网易云音乐</h1>
                    <Link to='/'>发现音乐</Link>
                    <Link to='/my'>我的音乐</Link>
                    <Link to='/friend'>朋友</Link>
                    <Link to='/store'>商城</Link>
                    <Link to='/nmusician'>音乐人</Link>
                    <Link to='/download'>下载客户端</Link>
                <input />
                <a className={style.create}>创作者中心</a>
                <a>登录</a>
            </div>
        </div>
    )
}
export default Header