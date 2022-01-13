import React, { useState, useContext } from "react";
import { TaskContext } from "../../context/TasksProvider";
import { createTaskObject } from "../../utils/createTaskObject";
import { TaskItem, TaskEditIcon, TaskInput, TaskInputContainer, TaskInputLabel, TaskInputCheckbox } from './Task.styled'

const Task = (props) => {
  const {task} = props;
  const taskContext = useContext(TaskContext)

  const [isClicked, setIsClicked] = useState(false)
  const [taskText, setTaskText] = useState(task.taskText)

  const handleClick = () => setIsClicked(!isClicked);

  const handleChange = (e) => setTaskText(e.target.value);

  const handleCheckboxClick = (e) => {
    const taskChanged = createTaskObject(task.id, taskText, e.target.checked)
    taskContext.updateCheckedTasks(taskChanged)
  }
  
  return (
    <TaskItem key={task.id}>
      <TaskInputContainer>
        {
          isClicked ? 
            <TaskInput type="input" defaultValue={taskText} onChange={handleChange} id={task.id} />
          :
            <>
              <TaskInputCheckbox type="checkbox" id={task.id} onClick={handleCheckboxClick}/>
              <TaskInputLabel htmlfor={task.id}>{taskText}</TaskInputLabel>
            </>
        }
      </TaskInputContainer>
      <TaskEditIcon icon="clarity:edit-line" onClick={handleClick}/>
    </TaskItem>
  );
};

export default Task;
