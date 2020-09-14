import React, { useReducer } from 'react';

// Working With Object
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.val };

        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.val };

        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.val };

        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.val };

        case 'reset':
            return initialState;

        default:
            return state;
    }
}


function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>First Count - {count.firstCounter}</div>
            <div>Second Count - {count.secondCounter}</div>

            <button onClick={() => dispatch({ type: 'increment', val: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', val: 1 })}>Decrement</button>

            <button onClick={() => dispatch({ type: 'increment', val: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', val: 5 })}>Decrement 5</button>

            <div>
                <button onClick={() => dispatch({ type: 'increment2', val: 1 })}>Increment Counter 2</button>
                <button onClick={() => dispatch({ type: 'decrement2', val: 1 })}>Decrement Counter 2</button>
            </div>

            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterTwo;