import React from 'react'

function Button(props) {
  return (
    <div className='container '>
      <button onClick={props.onClick} className={props.className}>{props.children}</button>
    </div>
  )
}

export default Button 