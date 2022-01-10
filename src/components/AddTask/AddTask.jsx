import React from 'react'
import { AddTaskButton, AddTaskContainer, AddTaskInput } from './AddTask.styled'

const AddTask = () => {
  return (
    <AddTaskContainer>
      <AddTaskInput placeholder='Add your task here...'></AddTaskInput>
      <AddTaskButton>+</AddTaskButton>
    </AddTaskContainer>
  )
}

export default AddTask
