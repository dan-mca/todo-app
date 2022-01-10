import React from 'react'
import { TasksContainer, TasksHeader, TasksParagraph, TasksList, TaskItem, TaskEditIcon } from './Tasks.styled'
import { Icon } from '@iconify/react';

const Tasks = (props) => {
  const { tasks } = props;
  return (
    <TasksContainer>
      <TasksHeader>Tasks</TasksHeader>
      { tasks.length === 0 ?
          <TasksParagraph>All tasks have been completed. Great job!</TasksParagraph>
        : 
          <>
            { tasks.map((task, index) => (
                <TasksList >
                  <TaskItem key={index} type="checkbox" />
                  {task}
                    {/* <input  type="checkbox" value={task} />{task} */}
                    {/* <input  type="input" value={task} /> */}
                    <TaskEditIcon icon="clarity:edit-line" />
                  {/* </TaskItem> */}
                </TasksList>
            ))
            }
          <TasksParagraph>Tasks to complete: {tasks.length}</TasksParagraph>
          </>
      }
    </TasksContainer>
  )
}

export default Tasks
