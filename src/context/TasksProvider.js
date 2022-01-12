import React, {createContext, useState} from 'react';

export const TaskContext = createContext([])

const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([])
  const [checkedTasks, setCheckedTasks] = useState([])

  const addCheckedTask = task => setCheckedTasks([...checkedTasks, task])

  const removeUncheckedTask = task => {
    const index = checkedTasks.findIndex(el => el.id === task.id)
    const checkedTasksCopy = [...checkedTasks]
    checkedTasksCopy.splice(index,1)

    setCheckedTasks(checkedTasksCopy)
  }

  const deleteTasks = (e) => {
    if(e.target.innerText === 'Delete' || e.target.id === 'Delete') {
      const filteredList = [...tasks].filter(task1 => ![...checkedTasks].find(task2 => task1.id === task2.id))
      setTasks(filteredList)
    }
  }


  const addTask = (task) => setTasks([...tasks, {id: tasks.length, taskText: task.taskText }])


  const data = {
    tasks,
    setTasks,
    addCheckedTask,
    removeUncheckedTask,
    checkedTasks,
    deleteTasks,
    addTask
  }
  return (
    <TaskContext.Provider value={data}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskProvider;