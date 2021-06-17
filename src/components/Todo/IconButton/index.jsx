import React from 'react'
import style from "./IconButton.module.sass";

 function IconButton({handler, children}) {
  return (
    <button className={style.iconButton} onClick={handler}>{children}</button>
  )
}

export default IconButton;