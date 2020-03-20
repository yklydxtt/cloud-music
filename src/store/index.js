import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as findReducer } from '../pages/Find/store/';
import clientAxios from '../client/request';
import serverAxios from '../server/request';
const reducer = combineReducers({
	find: findReducer
});
export const getStore = (req) => {
	// 改变服务器端store的内容，那么就一定要使用serverAxios
	return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
}
export const getClientStore = () => {
	// 改变客户端store的内容，一定要使用clientAxios
	return createStore(reducer, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}