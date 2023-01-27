import React from 'react'
import './mystyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    console.log("Class " , className);
  return (
    <div>
      <h1 className={`${className} font-xl`}>StyleSheets</h1>
    </div>
  )
}

export default Stylesheet
