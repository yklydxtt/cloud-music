import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import style from './style.css';
import search from './topbar.png';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            path: ''
        }
    }
    componentDidMount() {
        if (this.props.staticContext) {
            this.props.staticContext.css.push(style._getCss())
            this.setState({
                path: props.staticContext.path
            })
        } else {
            this.setState({
                path: window.location.pathname
            })
        }
    }
    handleSearch=()=>{
        const reg=/[\u4e00-\u9fa5|[A-Z]|[a-z]]/;
        console.log(reg.test(this.input.value))
    }
    render() {
        const { path } = this.state;
        // this.handleSearch()
        return (
            <div>
                <div className={style.header}>
                    <div className={style.wrap}>
                        <h1 className={style.logo} style={{ backgroundImage: `url(${search})` }}></h1>
                        <div className={style.link}>
                            <Link to='/' className={path === '/' ? style.focus : style.topNav}>发现音乐</Link>
                            <Link to='/my' className={path === '/my' ? style.focus : style.topNav}>我的音乐</Link>
                            <Link to='/friend' className={path === '/friend' ? style.focus : style.topNav}>朋友</Link>
                            <Link to='/store' className={path === '/store' ? style.focus : style.topNav}>商城</Link>
                            <Link to='/musician' className={path === '/musician' ? style.focus : style.topNav}>音乐人</Link>
                            <Link to='/download' className={path === '/download' ? style.focus : style.topNav}>下载客户端</Link>
                            <sup style={{ backgroundImage: `url(${search})` }}>&nbsp;</sup>
                        </div>
                        <div className={style.inputWarp} style={{ backgroundImage: `url(${search})` }}>
                            <input placeholder='音乐/视频/电台/用户' ref={node => this.input = node} onKeyUp={this.handleSearch} />
                        </div>
                        <a className={style.create}>创作者中心</a>
                        <a className={style.login}>登录</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;