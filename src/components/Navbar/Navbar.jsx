import React from 'react';
import { Button } from '../../GlobalStyles';
import { Nav, NavbarContainer, Logo } from './Navbar.styled'


const Navbar = () => {
  
  const handleClick = () => console.log('nav reset button clicked');

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
