import React from 'react';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <div>网易云音乐</div>
            <Link to='/'>发现音乐</Link>
            <Link to='/my'>我的音乐</Link>
            <Link to='/friend'>朋友</Link>
            <Link to='/store'>商城</Link>
            <Link to='/nmusician'>音乐人</Link>
            <input />
            <span>登录</span>
        </div>
    )
}
export default Header