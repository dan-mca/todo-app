import React, { useContext, useState } from 'react'
import { TaskContext } from '../../context/TasksProvider';
import Task from '../Task/Task'
import { TasksContainer, TasksHeader, TasksParagraph, TasksList } from './Tasks.styled'

const Tasks = () => {

  const taskContext = useContext(TaskContext)

  console.log(taskContext.tasks)

  return (
    <TasksContainer >
      <TasksHeader>Tasks</TasksHeader>
      { taskContext.tasks.length === 0 ?
          <TasksParagraph>All tasks have been completed. Great job!</TasksParagraph>
        : 
        <>
          <TasksList >
              { taskContext.tasks.map((task) => (
                <Task task={task} key={task.id}/>
              ))
              }
          </TasksList>
          <TasksParagraph>Tasks to complete: {taskContext.tasks.length}</TasksParagraph> 
        </>
      }
    </TasksContainer>
  )
}

export default Tasks