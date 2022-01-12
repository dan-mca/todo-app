import React, { useState, useContext } from "react";
import { TaskContext } from "../../context/TasksProvider";
import { TaskItem, TaskEditIcon, TaskInput, TaskInputContainer, TaskInputLabel, TaskInputCheckbox } from './Task.styled'

const Task = (props) => {
  const {task, index} = props;
  const taskContext = useContext(TaskContext)

  const [isClicked, setIsClicked] = useState(false)
  const [taskText, setTaskText] = useState(task.taskText)

  const handleClick = () => setIsClicked(!isClicked);

  const handleChange = (e) => setTaskText(e.target.value);

  const handleCheckboxclick = (e) => {

    if (e.target.checked === true) {
      taskContext.addCheckedTask({id: index,taskText})
    } else if (e.target.checked === false) {
      taskContext.removeUncheckedTask({id: index,taskText})
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
