import React, { useContext} from 'react';
import { TaskContext } from '../../context/TasksProvider';
import { FooterContainer, FooterText, FooterDeleteButton, FooterDeleteButtonIcon } from './Footer.styled';

const Footer = () => {

  const taskContext = useContext(TaskContext)
 
  const handleClick = (e) => taskContext.removeTasks(e)

  return (
    <FooterContainer>
      <FooterText>{taskContext.count} Tasks(s) Selected</FooterText>
      <FooterDeleteButton onClick={handleClick} >
        Delete
        <FooterDeleteButtonIcon icon="fluent:delete-48-regular" id='Delete'/>
      </FooterDeleteButton>
    </FooterContainer>
  )
}

export default Footer
