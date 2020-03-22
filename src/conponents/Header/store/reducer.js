import { SEARCH } from "./container";

const defaultState = {
    search: []
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH:
            const newSearch={
                ...defaultState,
                search:action.value
            }
            return newSearch;
        default:
            return state;
    }
}