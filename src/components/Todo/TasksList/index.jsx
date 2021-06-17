import React from 'react'
import TasksListItem from "components/Todo/TasksListItem";

function TasksList({tasks, finishTask, onDelete}) {
  return (
    <ul>
      {tasks.map(({id, title, isFinish}) => 
        <TasksListItem finishTask={() => finishTask(id)}
                       onDelete={() => onDelete(id)}
                       key={id} 
                       caption={title}
                       isFinish={isFinish}/>)}
    </ul>
  )
}

export default TasksList;
