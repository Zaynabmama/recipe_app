
import React from 'react';
import './style.css';

const Input = ({ type = 'text', placeholder, value, onChange, className = '' }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`input ${className}`}
        />
    );
};

export default Input;
