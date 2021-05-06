import React from 'react'
import Input from '../widgets/Input'

const ContactInput = ({name, Icon, ...inputProps}) => {
  return (
    <label className="ContactInput" htmlFor={name}>
      <Icon className="ContactInput__icon"/>
      <Input className="ContactInput__input" name={name} {...inputProps}/>
    </label>
  )
}

export default ContactInput;
