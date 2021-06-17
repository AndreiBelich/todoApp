import React, { useState } from 'react'
import TodoHeader from 'components/Todo/TodoHeader'
import AddTask from 'components/Todo/forms/AddTask'
import TasksList from './TasksList'
import style from './Todo.module.sass'

const initialTasks = [
  {
    id: 1,
    title: 'Create Todo List'
  },
  {
    id: 2,
    title: 'Do something'
  },
  {
    id: 3,
    title: 'Drink coffee'
  }
]

function Todo () {
  const [tasks, setTasks] = useState(initialTasks)

  const addTask = newTask => {
    console.log("handler");
    console.log(newTask)
    //setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  return (
    <article className={style.todo}>
      <TodoHeader caption='Todo APP' />
      <AddTask handler={addTask} />
      <TasksList tasks={tasks} />
    </article>
  )
}

export default Todo
