import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { userLoginReducers, userRegisterReducers } from './reducers/userReducer'



const reducer = combineReducers({
    userRegister : userRegisterReducers,
    userLogin : userLoginReducers,


});


const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin :{userInfo :userInfoFromStorage}
};


const middleware = [thunk];
 
const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: middleware,
});

export default store