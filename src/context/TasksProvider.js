import React, {createContext, useState} from 'react';
import { createTaskObject } from '../utils/createTaskObject'

export const TaskContext = createContext([])

const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([])
  const [count, setCount] = useState(0)

  const addTask = (task) => setTasks([...tasks, createTaskObject(tasks.length, task.taskText, false)])


  const createUpdatedTaskArray = (updatedTask, allTasks) => {
    let tasksTemp = [...allTasks]
    const indexOfTask = tasksTemp.findIndex(task => task.id === updatedTask.id)
    if (tasksTemp[indexOfTask].isChecked === false && updatedTask.isChecked === true) {
      tasksTemp[indexOfTask] = updatedTask
      return [tasksTemp, 1]
    } else if (tasksTemp[indexOfTask].isChecked === true && updatedTask.isChecked === false) {
      tasksTemp[indexOfTask] = updatedTask
      return [tasksTemp, -1]
    }
  }

  const updateCheckedTasks = (updatedTask) => {
    const [newArray, countUpdate] = createUpdatedTaskArray(updatedTask, tasks)
    setTasks(newArray)
    setCount(count + countUpdate)
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