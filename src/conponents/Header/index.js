import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import style from './style.css';
import topbar from './topbar.png';
import { search } from './store/action'
import Login from '../Login'

const Header = (props) => {
    const [path, setPath] = useState(props.staticContext ? props.staticContext.path : window.location.pathname);
    const [input, setInput] = useState('');
    const [inputval, setInputVal] = useState('');
    const [view, setView] = useState('none');
    const [loginView,setLoginView]=useState(false)
    const { search } = props
    if (props.staticContext) {
        props.staticContext.css.push(style._getCss())
    }
    const handleInput = () => {
        const value = input.value.trim();
        const { handleSearch } = props
        if (value) {
            handleSearch(value.trim())
        }
        setInputVal(value.trim())
        if (inputval.length) {
            setView('block')
        }
    }
    const handleblur = () => {
        setView('none')
    }
    const login=()=>{
        setLoginView(!loginView)
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
                        <input placeholder='音乐/视频/电台/用户' ref={node => setInput(node)} onKeyUp={handleInput} onFocus={handleInput} onBlur={handleblur} />
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
                    <a className={style.login} onClick={login} >登录</a>
                    {loginView?<Login view={login} />:null}
                </div>
            </div>
            <div className={style.nav}></div>
        </div>
    )
}
const mapStateToProps = state => ({
    search: state.head.search
});
const mapDispatchToProps = (dispatch) => ({
    handleSearch: (value) => {
        dispatch(search(value))
    }
})
const exportHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
export default exportHeader;