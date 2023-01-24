import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log("Function component clicked")
    }

  return (
    <div>
        <button onClick={clickHandler}>Click - Function (Component)</button>
      </div>
  )
}

export default FunctionClick
