import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import IconButton from "components/Todo/IconButton";
import style from "./TasksListItem.module.sass";

function TasksListItem({caption}) {
  return (
    <li className={style.tasksListItem}>
      <span>{caption}</span>
      <div className={style.buttonsWrapper}>
        <IconButton>
          <CheckBoxOutlineBlankIcon/>
        </IconButton>
        <IconButton>
          <DeleteIcon/>
        </IconButton>
      </div>
    </li>
  )
}

export default TasksListItem;
