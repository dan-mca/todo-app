import React, { useState, useContext } from "react";
import { TaskContext } from "../../context/TasksProvider";
import { TaskItem, TaskEditIcon, TaskInput, TaskInputContainer, TaskInputLabel, TaskInputCheckbox } from './Task.styled'

const Task = (props) => {
  const {task} = props;
  const taskContext = useContext(TaskContext)

  const [isClicked, setIsClicked] = useState(false)
  const [taskText, setTaskText] = useState(task.taskText)

  const handleClick = () => setIsClicked(!isClicked);

  const handleChange = (e) => setTaskText(e.target.value);

  const handleCheckboxclick = (e) => {

    if (e.target.checked === true) {
      taskContext.addCheckedTask({id: task.id, taskText})
    } else if (e.target.checked === false) {
      taskContext.removeUncheckedTask({id: task.id, taskText})
    }
  }

  console.log(task)
  
  return (
    <TaskItem key={task.id}>
      <TaskInputContainer>
        {
          isClicked ? 
            <TaskInput type="input" defaultValue={taskText} onChange={handleChange} id={task.id} />
          :
            <>
              <TaskInputCheckbox type="checkbox" id={task.id} onClick={handleCheckboxclick}/>
              <TaskInputLabel htmlfor={task.id}>{taskText}</TaskInputLabel>
            </>
        }
      </TaskInputContainer>
      <TaskEditIcon icon="clarity:edit-line" onClick={handleClick}/>
    </TaskItem>
  );
};

export default Task;
