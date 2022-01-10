import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem calc((100vw/12) * 3);
`;

export const HeadingText = styled.h2`
  font-size: 3rem;
  padding: 1rem 0 2rem;
`;

export const HeadingParagraph = styled.p`
  font-size: 1rem;
  color: #6C6A7C;
`;

export const HeadingNameInput = styled.input`
  background-color: #2B2A33;
  border: 1px dashed #6C6A7C;
  border-radius: 7px;
  padding: 1rem 2rem;
  color: #FFFFFF;
  :focus {
    outline: none;
  }
`;