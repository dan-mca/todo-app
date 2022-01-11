import React from 'react'
import Task from '../Task/Task'
import { TasksContainer, TasksHeader, TasksParagraph, TasksList } from './Tasks.styled'

const Tasks = (props) => {
  const { tasks } = props;
  return (
    <TasksContainer>
      <TasksHeader>Tasks</TasksHeader>
      { tasks.length === 0 ?
          <TasksParagraph>All tasks have been completed. Great job!</TasksParagraph>
        : 
        <>
          <TasksList >
              { tasks.map((task, index) => (
                <Task task={task} index={index} />
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
