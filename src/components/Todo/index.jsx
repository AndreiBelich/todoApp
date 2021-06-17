import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import TodoHeader from 'components/Todo/TodoHeader'
import AddTask from 'components/Todo/forms/AddTask'
import TasksList from './TasksList'
import style from './Todo.module.sass'

const initialTasks = [
  {
    id: uuid(),
    title: 'Create Todo List',
    isFinish: false
  },
  {
    id: uuid(),
    title: 'Do something',
    isFinish: false
  },
  {
    id: uuid(),
    title: 'Drink coffee',
    isFinish: false
  }
]

function Todo () {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = newTask => {
    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  const finishTask = (id) => {
    setTasks((prevTasks) => {
      const index = prevTasks.findIndex((element) => element.id === id);
      const oldItem = prevTasks[index];
      const value = !oldItem.isFinish;
      const item = {...prevTasks[index], isFinish: value};
      return [...prevTasks.slice(0, index), item, ...prevTasks.slice(index + 1)];
    });
  }

  const deleteItem = (id) => {
    setTasks((prevTasks) => {
      const index = prevTasks.findIndex((element) => element.id === id);
      return [...prevTasks.slice(0, index), ...prevTasks.slice(index + 1)];
    })
  }


  return (
    <article className={style.todo}>
      <TodoHeader caption='Todo APP' />
      <AddTask handler={addTask} />
      <TasksList finishTask={finishTask} 
                 tasks={tasks}
                 onDelete={deleteItem} />
    </article>
  )
}

export default Todo;
