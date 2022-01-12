import React, { useState, useContext } from 'react'
import { AddTaskButton, AddTaskContainer, AddTaskInput } from './AddTask.styled'
import { TaskContext } from '../../context/TasksProvider'

const AddTask = () => {
  const [inputValue, setInputValue] = useState('')

  const taskContext = useContext(TaskContext)

  const handleChange = (e) => setInputValue(e.target.value)

  const handleInput = (e) => {
    if(e.key === 'Enter' && inputValue.length > 0) {
      setInputValue('')
      taskContext.addTask({taskText: inputValue})
    }
  }

  const handleClick = (e) => { 
    if (inputValue.length > 0) {
      taskContext.addTask({taskText: inputValue})
    }
    setInputValue('')
  }


  return (
    <AddTaskContainer>
      <AddTaskInput 
        placeholder='Add your task here...'
        onKeyPress={handleInput}
        onChange={handleChange}
        value={inputValue}
      >
      </AddTaskInput>
      <AddTaskButton onClick={handleClick}>+</AddTaskButton>
    </AddTaskContainer>
  )
}

export default AddTask
