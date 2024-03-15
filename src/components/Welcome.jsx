import React, { useState } from 'react';
function Welcome({text, color, random}) {

    const [count, setCount] = useState(0);

// view
    return (
    <div>
        Hello world
        <p>
            Message tu component cha la:
            <b>{text}</b>
            <button className='d-block' onClick={random}>
                Click me to random
                </button>
        </p>
    </div>
    );
}

// trong mot rfc bat buoc phai co mot export default
export default Welcome;

export const GoodBye = () => {

    return <div>Đây là component GoodBye nhé!</div>;
};
