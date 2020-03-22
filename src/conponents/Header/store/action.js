import axios from 'axios';
import {SEARCH} from './container';

const searchList=(value)=>({
    type:SEARCH,
    value
})
export const search=(value)=>{
    console.log(value)
    return (dispatch)=>{
        return axios.get('api/search/suggest',{params:{keywords:value}}).then((data)=>{
            const value=data.data.result
            dispatch(searchList(value))
        })
    }
}