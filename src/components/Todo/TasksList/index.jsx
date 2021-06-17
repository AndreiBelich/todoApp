import React from 'react'
import TasksListItem from "components/Todo/TasksListItem";

function TasksList({tasks}) {
  return (
    <ul>
      {tasks.map(({id, title}) => <TasksListItem key={id} caption={title}/>)}
    </ul>
  )
}

export default TasksList;
