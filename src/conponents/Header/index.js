import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import style from './style.css';
import topbar from './topbar.png';
import { search, logout } from './store/action'
import Login from '../Login'

const Header = (props) => {
    const [path, setPath] = useState(props.staticContext ? props.staticContext.path : window.location.pathname);
    const [inputval, setInputVal] = useState('');
    const [view, setView] = useState('none');
    const [loginView, setLoginView] = useState(false);
    const [loginList, setLoginList] = useState(false)
    const { search, loginData } = props;
    if (props.staticContext) {
        props.staticContext.css.push(style._getCss())
    }
    const handleChange=(e)=>{
        setInputVal(e.target.value);
    }
    const handleInput = () => {
        const { handleSearch } = props
        if (inputval) {
            handleSearch(inputval.trim())
        }
        if (inputval.length) {
            setView('block')
        }
    }
    const handleblur = () => {
        setView('none')
    }
    const login = () => {
        setLoginView(!loginView)
    }
    const handleLogOut = () => {
        new Promise(
            function (resolve, reject) {
                props.handleLoginOut();
                resolve()
            }
        ).then(()=>{
            window.location.reload()
        })
    }

    return (
        <div>
            <div className={style.header}>
                <div className={style.wrap}>
                    <h1 className={style.logo} style={{ backgroundImage: `url(${topbar})` }}></h1>
                    <div className={style.link}>
                        <Link to='/' className={path === '/' ? style.focus : style.topNav} onClick={() => { setPath('/') }}>发现音乐</Link>
                        <Link to='/my' className={path === '/my' ? style.focus : style.topNav} onClick={() => { setPath('/my') }}>我的音乐</Link>
                        <Link to='/friend' className={path === '/friend' ? style.focus : style.topNav} onClick={() => { setPath('/friend') }}>朋友</Link>
                        <Link to='/store' className={path === '/store' ? style.focus : style.topNav} onClick={() => { setPath('/store') }}>商城</Link>
                        <Link to='/musician' className={path === '/musician' ? style.focus : style.topNav} onClick={() => { setPath('/musician') }}>音乐人</Link>
                        <Link to='/download' className={path === '/download' ? style.focus : style.topNav} onClick={() => { setPath('/download') }}>下载客户端</Link>
                        <sup style={{ backgroundImage: `url(${topbar})` }}>&nbsp;</sup>
                    </div>
                    <div className={style.inputWarp} style={{ backgroundImage: `url(${topbar})` }}>
                        <input placeholder='音乐/视频/电台/用户' onChange={handleChange} onKeyUp={handleInput} onFocus={handleInput} onBlur={handleblur} />
                        <div className={style.search} style={{ display: view }}>
                            <div className={style.note}>
                                <Link to='/search' className={style.xtag}>搜索"{inputval}"相关用户></Link>
                            </div>
                            <div className={style.rap}>{search.order && search.order.map((item, index) => (
                                <div key={item} className={style.rapWrap}>
                                    <div className={style.rapTitle}>{item}</div>
                                    <div className={style.rapItem}>
                                        {search[item].map((value, index) => <Link key={value.id} to='/search' >{value.name}</Link>
                                        )}
                                    </div>
                                </div>
                            ))}</div>
                        </div>
                    </div>
                    <a className={style.create}>创作者中心</a>
                    {loginData ? <div className={style.loginStatus} onMouseOver={() => { setLoginList(true) }} onMouseOut={() => { setLoginList(false) }}>
                        <img src={loginData.avatarUrl} />
                        <ul style={{ display: loginList ? 'block' : 'none' }}>
                            <li><i></i>我的主页</li>
                            <li><i></i>我的消息</li>
                            <li><i></i>我的等级</li>
                            <li><i></i>VIP会员</li>
                            <li><i></i>我的主页</li>
                            <li><i></i>个人设置</li>
                            <li><i></i>实名认证</li>
                            <li onClick={handleLogOut}><i></i>退出</li>
                        </ul>
                    </div> : <a className={style.login} onClick={login} >登录</a>}
                    {loginView ? <Login view={login} /> : null}
                </div>
            </div>
            <div className={style.nav}></div>
        </div>
    )
}
const mapStateToProps = state => ({
    search: state.head.search,
    loginData: state.head.loginData
});
const mapDispatchToProps = (dispatch) => ({
    handleSearch: (value) => {
        dispatch(search(value))
    },
    handleLoginOut: () => {
        dispatch(logout())
    }
})
const exportHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
export default exportHeader;