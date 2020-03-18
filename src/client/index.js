import React from 'react'
import ReactDom from 'react-dom';
import Find from '../pages/Find/'
const App = () => {
    return (
        <div><Find /></div>
    )
}
ReactDom.hydrate(<App/>,document.getElementById('root'))