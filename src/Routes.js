import App from './App'
import Find from './pages/Find';
export default [{
    path:'/',
    component:App,
    routes:[{
        path:'/',
        exact:true,
        key:'find',
        component:Find
    }]
}]