import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.name}
        </button>
    );
};

export default Button;