import React from 'react'
import ReactDom from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux';
import { getClientStore } from '../store';
import routes from '../Routes'

const store = getClientStore()
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </Provider>
    )
}
ReactDom.hydrate(<App />, document.getElementById('root'))