import axios from 'axios';
import { SEARCH } from './container';
import { LOGINDATA } from './container'
import { LOGOUT } from './container'

const searchList = (value) => ({
    type: SEARCH,
    value
})
const loginData = (value) => ({
    type: LOGINDATA,
    value
})
const handlelogout = () => ({
    type: LOGOUT
})
export const search = (value) => {
    return (dispatch) => {
        return axios.get('api/search/suggest', { params: { keywords: value } }).then((data) => {
            const value = data.data.result
            dispatch(searchList(value))
        })
    }
}
export const isLogin = () => {
    return (dispatch, getState, request) => {
        return request.get('login/status').then((data) => {
            if(data.data&&data.data.code){
                const value = data.data.profile
                dispatch(loginData(value))
            }
        }).catch((e) => {
            dispatch(loginData(null))
        })
    }
}
export const logout = () => {
    return (dispatch) => {
        return axios.get('api/logout').then((data) => {
            dispatch(handlelogout())
        }).then(()=>{
            dispatch(loginData(null))
        })
    }
}