import React, { useState } from "react";
import { TaskItem, TaskEditIcon, TaskInput, TaskInputContainer, TaskInputLabel, TaskInputCheckbox } from './Task.styled'

const Task = (props) => {
  const {task, index} = props;

  const [isClicked, setIsClicked] = useState(false)
  const [taskText, setTaskText] = useState(task)

  const handleClick = (e) => {
    setIsClicked(!isClicked)

  };

  const handleChange = (e) => setTaskText(e.target.value)

  

  return (
    <TaskItem key={index}>
      <TaskInputContainer>
        {
          isClicked ? 
            <TaskInput type="input" defaultValue={taskText} onChange={handleChange} id={index} />
          :
            <>
              <TaskInputCheckbox type="checkbox" id={index} />
              <TaskInputLabel htmlfor={index}>{taskText}</TaskInputLabel>
            </>
        }
        {/* <TaskInput type="checkbox" id={index} /> */}
        {/* <TaskInputLabel htmlfor={index}>{task}</TaskInputLabel> */}
      </TaskInputContainer>

      {/* <input type="input" value={task} id={index} /> */}
      <TaskEditIcon icon="clarity:edit-line" value={index} onClick={handleClick}/>
    </TaskItem>
  );
};

export default Task;
