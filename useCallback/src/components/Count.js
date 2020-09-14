import React from 'react';


function Count({ text, count }) {
    console.log(`Rendring ${text}`);
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Count);
// Now component will re-render only with Change of props or state