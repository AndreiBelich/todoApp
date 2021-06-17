import React from 'react'
import style from "./TodoHeader.module.sass";

function TodoHeader({caption}) {
  return (
    <h2 className={style.todoHeader}>{caption}</h2>
  )
}

export default TodoHeader;
