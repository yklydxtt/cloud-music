import React from 'react'
import {renderRoutes} from 'react-router-config'
import Header from './conponents/Header'
import {isLogin}from './conponents/Header/store/action'
// import 'react-id-swiper/lib/styles/css/swiper.css';
const App =(props)=>{
    return (
        <div>
            <Header staticContext={props.staticContext} />
            {renderRoutes(props.route.routes)}
        </div>
    )
}
App.loadData=(store)=>{
    return store.dispatch(isLogin())
}
export default App;