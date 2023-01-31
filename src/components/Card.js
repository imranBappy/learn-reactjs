import React, { useState } from 'react';
import Button from './Button';

const Card = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <Button handleClick={increment} name="+" ></Button>
            <Button handleClick={decrement} name="-" ></Button>
        </div>
    );
};

export default Card;