import React, { useState } from "react";
import { TaskItem, TaskEditIcon, TaskInput, TaskInputContainer, TaskInputLabel, TaskInputCheckbox } from './Task.styled'

const Task = (props) => {
  const {task, index, addSelectedTask, removeSelectedTask} = props;

  const [isClicked, setIsClicked] = useState(false)
  const [taskText, setTaskText] = useState(task)
  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => setIsClicked(!isClicked);

  const handleChange = (e) => setTaskText(e.target.value);

  const handleCheckboxclick = (e) => {
    setIsChecked(e.target.checked)
    if (e.target.checked === true) {
      addSelectedTask({
        id: index,
        taskText,
        action: 'add'
      })
    } else {
      removeSelectedTask({
        id: index,
        taskText,
        action: 'delete'
      })
    }
  }
  
  return (
    <TaskItem key={index}>
      <TaskInputContainer>
        {
          isClicked ? 
            <TaskInput type="input" defaultValue={taskText} onChange={handleChange} id={index} />
          :
            <>
              <TaskInputCheckbox type="checkbox" id={index} onClick={handleCheckboxclick}/>
              <TaskInputLabel htmlfor={index}>{taskText}</TaskInputLabel>
            </>
        }
      </TaskInputContainer>
      <TaskEditIcon icon="clarity:edit-line" value={index} onClick={handleClick}/>
    </TaskItem>
  );
};

export default Task;
