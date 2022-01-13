import React, {useContext} from 'react';
import { TaskContext } from '../../context/TasksProvider';
import { Button } from '../../GlobalStyles';
import { Nav, NavbarContainer, Logo } from './Navbar.styled'


const Navbar = (props) => {
  const {reset} = props;

  const taskContext = useContext(TaskContext)

  const handleClick = () => {
    reset('')
    taskContext.setTasks([])
    taskContext.setCount(0)
  };

  return (
    <Nav>
      <NavbarContainer>
        <Logo to="/">MyTodos</Logo>
        <Button onClick={handleClick} >Reset</Button>
      </NavbarContainer>
      
    </Nav>
  )
}

export default Navbar
