import React, { useState, useMemo } from 'react';

// useMemo - That will only reCompute the cached value when one of the depedency has chaged
function Counter() {

    const [counterOne, setConterOne] = useState(0);
    const [counterTwo, setConterTwo] = useState(0);

    const incrementOne = () => {
        setConterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setConterTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++
        return counterOne % 2 === 0;
    }, [counterOne]); // [] : depedency value here counterOne


    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? ' Even' : ' Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter;