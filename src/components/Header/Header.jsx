import React, { useState } from 'react';
import { HeaderContainer, HeadingText, HeadingNameInput, HeaderParagraph, HeadingParagraph } from './Header.styled';

const Header = (props) => {
  const { getName, name } = props;
  // const [name, setName] = useState('');
  const handleInput = (e) => {
    return e.key === 'Enter' ? getName(e.target.value) : null;
  }

  return (
    <HeaderContainer>
      { !name ? 
      <>
        <HeadingText>What is your name?</HeadingText>
        <HeadingNameInput 
          placeholder="Plese enter your name..."
          onKeyPress={handleInput}
        >
        </HeadingNameInput>
      </>
      :
      <>
        <HeadingText>Welcome Back {name}!</HeadingText>
        <HeadingParagraph>Let’s enter the tasks we need to complete for this upcoming week. Just use the input below to create a todo.</HeadingParagraph>
      </>
      }
      
    </HeaderContainer>
  )
};

export default Header
