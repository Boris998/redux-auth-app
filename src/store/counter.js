import {createSlice} from "@reduxjs/toolkit";

//returns an action obj of this shape: {type: 'some auto-generated unique identifier'}
//this creates the redux store

const initialCounterState = {counter: 0, showCounter: true};
//creating slice of the global state
//returns an action obj of this shape: {type: 'some auto-generated unique identifier'}
//this creates the redux store
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    //the "@reduxjs/toolkit" package clones the code in an immutable way
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;//payload prop holds extra data that might be dispatched
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

//how do we dispatch actions... we don't have our own if statements for the action.type,
//and we don't know what the id for our actions should be
export const counterActions = counterSlice.actions;

export default counterSlice;