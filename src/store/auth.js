import {createSlice} from "@reduxjs/toolkit";

//returns an action obj of this shape: {type: 'some auto-generated unique identifier'}
//this creates the redux store

const initialAuthState = {isAuthenticated: false};
//returns an action obj of this shape: {type: 'some auto-generated unique identifier'}
//this creates the redux store
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    //the "@reduxjs/toolkit" package clones the code in an immutable way
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

//how do we dispatch actions... we don't have our own if statements for the action.type,
//and we don't know what the id for our actions should be
export const authActions = authSlice.actions;

export default authSlice.reducer;