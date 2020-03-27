import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import style from './style.css';
import topbar from './topbar.png';
import { search } from './store/action'

const Header = (props) => {
    const [path, setPath] = useState(props.staticContext ? props.staticContext.path : window.location.pathname);
    const [input, setInput] = useState('');
    const [inputval, setInputVal] = useState('');
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
    }
    console.log(inputval)
    console.log(search)
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
                        <input placeholder='音乐/视频/电台/用户' ref={node => setInput(node)} onKeyUp={handleInput} onFocus={handleInput} />
                        <div className={style.search} style={{ display: inputval.length ? 'block' : 'none' }}>
                            <div className={style.note}>
                                <Link to='/search' className={style.xtag}>搜索"{inputval}"相关用户></Link>
                            </div>
                            <div className={style.rap}>{search.order && search.order.map((item, index) => (
                                <div key={item}>
                                    <div>{item}</div>
                                    <div>
                                        {search[item].map((value, index) => <Link key={value.id}>{value.name}</Link>
                                        )}
                                    </div>
                                </div>
                            ))}</div>
                        </div>
                    </div>
                    <a className={style.create}>创作者中心</a>
                    <a className={style.login}>登录</a>
                </div>
            </div>
        </div>
    )
}

// class Header extends Component {
//     constructor() {
//         super();
//         this.state = {
//             path: ''
//         }
//     }
//     componentWillMount() {
//         if (this.props.staticContext) {
//             this.props.staticContext.css.push(style._getCss())
//             this.setState({
//                 path: this.props.staticContext.path
//             })
//         } else {
//             this.setState({
//                 path: window.location.pathname
//             })
//         }
//     }
//     handleSearch = () => {
//         const reg = /[\u4e00-\u9fa5]|[A-Z]|[a-z]/;
//         const value = this.input.value.trim();
//         const { handleSearch }=this.props
//         if (reg.test(value)) {
//             handleSearch(value)
//             console.log(1)
//         }
//     }
//     render() {
//         const { path } = this.state;
//         return (
//             <div>
//                 <div className={style.header}>
//                     <div className={style.wrap}>
//                         <h1 className={style.logo} style={{ backgroundImage: `url(${topbar})` }}></h1>
//                         <div className={style.link}>
//                             <Link to='/' className={path === '/' ? style.focus : style.topNav}>发现音乐</Link>
//                             <Link to='/my' className={path === '/my' ? style.focus : style.topNav}>我的音乐</Link>
//                             <Link to='/friend' className={path === '/friend' ? style.focus : style.topNav}>朋友</Link>
//                             <Link to='/store' className={path === '/store' ? style.focus : style.topNav}>商城</Link>
//                             <Link to='/musician' className={path === '/musician' ? style.focus : style.topNav}>音乐人</Link>
//                             <Link to='/download' className={path === '/download' ? style.focus : style.topNav}>下载客户端</Link>
//                             <sup style={{ backgroundImage: `url(${topbar})` }}>&nbsp;</sup>
//                         </div>
//                         <div className={style.inputWarp} style={{ backgroundImage: `url(${topbar})` }}>
//                             <input placeholder='音乐/视频/电台/用户' ref={node => this.input = node} onKeyUp={this.handleSearch} />
//                         </div>
//                         <a className={style.create}>创作者中心</a>
//                         <a className={style.login}>登录</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
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