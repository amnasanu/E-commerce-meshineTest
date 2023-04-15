import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { userLoginReducers, userRegisterReducers } from './reducers/userReducer'
import { productListReducers, productDetailsReducer } from './reducers/productReducer'
import { cartReducers } from './reducers/cartReducers'




const reducer = combineReducers({
    userRegister : userRegisterReducers,
    userLogin : userLoginReducers,
    productList :productListReducers,
    productDetails :productDetailsReducer,
    cart :cartReducers,


});


const cartItemsFromStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) :[]

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart: {
        cartItems : cartItemsFromStorage
    },
    userLogin :{userInfo :userInfoFromStorage}
};


const middleware = [thunk];
 
const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: middleware,
});

export default store