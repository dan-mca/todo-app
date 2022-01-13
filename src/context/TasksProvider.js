import React, {createContext, useState} from 'react';

export const TaskContext = createContext([])

const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([])
  const [count, setCount] = useState(0)

  const addTask = (task) => setTasks([...tasks, {id: tasks.length, taskText: task.taskText, isChecked: false }])

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

  const removeTasks = (e) => {
    if(e.target.innerText === 'Delete' || e.target.id === 'Delete') {
      const tasksToDelete = [...tasks].filter(task => !task.isChecked)
      setTasks(tasksToDelete)
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