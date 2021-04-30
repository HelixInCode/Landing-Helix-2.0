import React, {Children} from 'react'

const MediaButton = ({type, link, children}) => {
  return (
    <a id="instagram" className={`MediaButton ${type}`} href={link} target="_blank">
      {children}
    </a>
  )
}

export default MediaButton;
