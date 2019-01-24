import React from 'react';

const InputWithLabel = ({id, label, type, inputName, inputValue, placeholder, changeHandler}) => {
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} name={inputName} value={inputValue} placeholder={placeholder} onChange={changeHandler}/>
        </div>
    )
}

export default InputWithLabel;