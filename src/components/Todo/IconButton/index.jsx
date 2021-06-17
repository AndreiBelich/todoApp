import React from 'react'

 function IconButton({handler, children}) {
  return (
    <button onClick={handler}>{children}</button>
  )
}

export default IconButton;