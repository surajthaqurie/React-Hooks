import React, { useState, useEffect } from 'react';

function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log("mouse Event");

        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('UseEffect Called');
        window.addEventListener('mousemove', logMousePosition);

        // Clean up Function
        return () => {
            console.log('Component unmouting code');
            window.removeEventListener('mousemove', logMousePosition);
        }
        
    }, []); // This Effect doesnot depends any props and state - empty array

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}


export default HookMouse;