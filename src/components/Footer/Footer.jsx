import React, { useEffect, useState } from 'react';
import { FooterContainer, FooterText, FooterDeleteButton, FooterDeleteButtonIcon } from './Footer.styled';

const Footer = (props) => {
  const {selectedTasks} = props;

  return (
    <FooterContainer>
      <FooterText>{selectedTasks} Tasks(s) Selected</FooterText>
      <FooterDeleteButton>
        Delete
        <FooterDeleteButtonIcon icon="fluent:delete-48-regular" />
      </FooterDeleteButton>
    </FooterContainer>
  )
}

export default Footer
