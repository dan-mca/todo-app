import React, { useState } from 'react'
import { AddTaskButton, AddTaskContainer, AddTaskInput } from './AddTask.styled'

const AddTask = (props) => {
  const { getTask } = props;
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => setInputValue(e.target.value)

  const handleInput = (e) => {
    if(e.key === 'Enter' && inputValue.length > 0) {
      getTask(inputValue)
      setInputValue('')
    }
  }

  const handleClick = (e) => { 
    if (inputValue.length > 0) {
      getTask(inputValue)
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
