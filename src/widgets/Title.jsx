import React from 'react'

const Title = ({className, inner}) => {
  return (
    <div className={`Title ${className}`}>
      <h2>{inner}</h2>
      <hr style={{backgroundColor: "#fff", width: "100px", height: "1px"}}/>
    </div>
  )
}

export default Title
