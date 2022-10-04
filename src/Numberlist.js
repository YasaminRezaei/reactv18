import React, { useDeferredValue } from 'react';


function Numberlist({numbers}) {
    const deferredValue = useDeferredValue(numbers);
    return (
        <div>
             {deferredValue.map(number => <p key={number}>{number}</p>)}
        </div>
    );
}

export default Numberlist;