import {configureStore} from '@reduxjs/toolkit';
//store ko v sare reducers ke bare me batana hoga tabhi wo usko use me le payega
//jo reducer yaha registered hoga sirf usko hi update karta hai ye
import todoReducer from '../Features/Todo/Todoslice';
//const persistedState = localStorage.getItem('todos') ? { todos: JSON.parse(localStorage.getItem('todos')) } : {};
const store = configureStore({
    //logic part todoslice me na likh ke kahi or v likh sakte the then wha se usko import kra ke waha likh dete
    reducer: todoReducer,
    //kuch v update karne ka kaam reducer ke through hi hot ahai
    //preloadedState: persistedState
})

export default store
