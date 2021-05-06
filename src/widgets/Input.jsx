import React from 'react';

const Input = ({type, name, autoComplete, value, required, className, placeholder, handleChange}) =>(
  <input 
    className={className}
    placeholder={placeholder}
    onChange={handleChange}
    type={type}
    name={name}
    id={name}
    value={value}
    autoComplete={autoComplete}
    required={required}
  />
)

export default Input;