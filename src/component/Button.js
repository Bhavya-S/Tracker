import React from 'react';

const Button = ({btnName,clickHandler}) => {
    return(
        <div>
            <button onClick={clickHandler}>{btnName}</button>
        </div>
    )
}

export default Button;