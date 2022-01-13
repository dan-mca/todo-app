import React, {createContext, useState} from 'react';
import { createTaskObject } from '../utils/createTaskObject'

export const TaskContext = createContext([])

const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([])
  const [count, setCount] = useState(0)

  const addTask = (task) => setTasks([...tasks, createTaskObject(tasks.length, task.taskText, false)])

  const updateCheckedTasks = updatedTask => {
    let tasksTemp = [...tasks]
    const indexOfTask = tasksTemp.findIndex(task => task.id === updatedTask.id)
    if(tasksTemp[indexOfTask].isChecked === false && updatedTask.isChecked === true) {
      tasksTemp[indexOfTask] = updatedTask
      setTasks(tasksTemp)
      setCount(count + 1)
    } else if (tasksTemp[indexOfTask].isChecked === true && updatedTask.isChecked === false) {
      tasksTemp[indexOfTask] = updatedTask
      setTasks(tasksTemp)
      setCount(count - 1)
    }
  }

  const tasksToDelete = (allTasks) => [...allTasks].filter(task => !task.isChecked)

  const removeTasks = (e) => {
    if(e.target.innerText === 'Delete' || e.target.id === 'Delete') {
      setTasks(tasksToDelete(tasks))
      setCount(0)
    }
  }

  const data = {
    tasks,
    setTasks,
    addTask,
    updateCheckedTasks,
    count,
    setCount,
    removeTasks
  }
  return (
    <TaskContext.Provider value={data}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskProvider;