import { SEARCH } from "./container";
import { LOGINDATA } from "./container";
import { LOGINOUT } from "./container";

const defaultState = {
    search: [],
    loginData:null
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH:
            const newSearch={
                ...defaultState,
                search:action.value
            }
            return newSearch;
        case LOGINDATA:
            const loginData={
                ...defaultState,
                loginData:action.value
            }
            return loginData;
        case LOGINOUT:
            const logout={
                ...defaultState,
                loginData:null
            }
            return logout
        default:
            return state;
    }
}