import {configureStore, createSlice} from "@reduxjs/toolkit";
//2 diff ways
import counterSlice from "./counter";
import authReducer from './auth';

// const INCREMENT = 'increment';

//configureStore expects object and reducer set
//configureStore creates a map diff reducer functions, and that map is set as a value for the main reducer
//behind the scenes configureStore merges the reducers into one big reducer
// const store = configureStore({reducer: {counter: counterSlice.reducer}});
const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authReducer}
});

export default store;
