import classes from './Counter.module.css';
//helps connect class based comp with redux
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store/counter";


const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => {
        // dispatch({type: 'increment'});
        //increment() is a method which when exe. it auto-generates a full action obj
        //with the type set to this auto-generated unique action identifier
        dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
        //{type: SOME_UNIQUE_IDENTIFIER,default redux-toolkit-->payload: 10}
        dispatch(counterActions.increase(10));
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };


    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
        </main>
    );
};

export default Counter;

