import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentF() {
    const countContex = useContext(CountContext);
    return (
        <div>
            Component F : {countContex.countState} : 
            <button onClick={() => countContex.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContex.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContex.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF;