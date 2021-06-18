import React from 'react'
import cn from "classnames";
import style from "./IconButton.module.sass";

 function IconButton({handler,className, children}) {
  return (
    <button className={cn(className, style.iconButton)} onClick={handler}>{children}</button>
  )
}

export default IconButton;