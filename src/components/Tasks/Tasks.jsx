import React from 'react'
import { TasksContainer, TasksHeader, TasksParagraph } from './Tasks.styled'

const Tasks = (props) => {
  const { tasks } = props;
  return (
    <TasksContainer>
      <TasksHeader>Tasks</TasksHeader>
      { tasks.length === 0 ?
          <TasksParagraph>All tasks have been completed. Great job!</TasksParagraph>
        : null
      }
    </TasksContainer>
  )
}

export default Tasks
