import React, { useState } from 'react'
import Task from '../Task/Task'
import { TasksContainer, TasksHeader, TasksParagraph, TasksList } from './Tasks.styled'

const Tasks = (props) => {
  const { tasks, checkedTasks } = props;
  const [selectedTasks, setSelectedTasks] = useState([])
  const taskSelected = (task) => {
    let index = selectedTasks.findIndex(el => el.id === task.id)
    if (index < 0) {
      checkedTasks(task)
    }
  }

  const taskUnselected = (task) => {
    let index = selectedTasks.findIndex(el => el.id === task.id)
    checkedTasks(task)
  }

  
  
 
  return (
    <TasksContainer>
      <TasksHeader>Tasks</TasksHeader>
      { tasks.length === 0 ?
          <TasksParagraph>All tasks have been completed. Great job!</TasksParagraph>
        : 
        <>
          <TasksList >
              { tasks.map((task, index) => (
                <Task task={task} index={index} addSelectedTask={taskSelected} removeSelectedTask={taskUnselected}/>
              ))
              }
          </TasksList>
          <TasksParagraph>Tasks to complete: {tasks.length}</TasksParagraph> 
        </>
      }
    </TasksContainer>
  )
}

export default Tasks
