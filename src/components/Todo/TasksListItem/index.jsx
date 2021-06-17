import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import cn from "classnames";
import CheckIcon from '@material-ui/icons/Check';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import IconButton from "components/Todo/IconButton";
import style from "./TasksListItem.module.sass";

function TasksListItem({caption, finishTask, onDelete, isFinish}) {

  return (
    <li className={style.tasksListItem}>
      <span className={isFinish ? style.isFinish : ""}>{caption}</span>
      <div className={style.buttonsWrapper}>
        <IconButton handler={finishTask}>
          {isFinish ? <CheckIcon/> : <CheckBoxOutlineBlankIcon/>}
        </IconButton>
        <IconButton handler={onDelete}>
          <DeleteIcon/>
        </IconButton>
      </div>
    </li>
  )
}

export default TasksListItem;
