import React, { useEffect, useRef } from 'react';

// useRef - this hook makes it possible to access dom Node directly with in functional component
function FocusInput() {

    // Step2 calling useRef with passing initialvalue
    const inputRef = useRef(null);


    useEffect(() => {
        // Focus the input element
        inputRef.current.focus(); // React set current property to the crossponding dom node
    }, []);


    return (
        <div>
            {/*Step3 - atached with input value with ref key */}
            <input ref={inputRef} type="text" />
        </div>
    );
}

export default FocusInput;
