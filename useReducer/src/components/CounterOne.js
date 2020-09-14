import React, { useReducer } from 'react';

// Step-2  defines initialState and reducer 
const initialState = 0;

// Reducer function accepts two values(current state and action) and return one value(new State)
const reducer = (state, action) => { // In this example there are three action Incr Dec and Rest
 
    // return newState
    switch (action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return initialState;

        default:
            return state;
    }
}


function CounterOne() {

    // Step-1 
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne;