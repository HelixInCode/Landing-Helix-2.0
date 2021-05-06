import React from 'react';

const Button = ({color, handleClick, type, disabled, children}) => {
  return (
    <button
      type={type}
      className={`Button ${color? color : ''}`}
      disabled={disabled}
      onClick={handleClick} 
    >
      {children}
    </button>
  )
}

export default Button;
