import React from 'react';

// React.MEMO - is higher order component it prevent function component from being re-render if its props or state dont change
// React version 16.6

function Button({ handleClick, children }) {
    console.log('Rendring button - ', children);
    return (
        <div>
            <button onClick={handleClick}>
                {children}
            </button>
        </div>
    )
}

export default React.memo(Button);