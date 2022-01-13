import styled from 'styled-components';
import { Paragraph } from '../../GlobalStyles';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem calc((100vw/12) * 3);

  @media (max-width:991px) {
    padding: 2rem 1rem 1rem;
  }
`;

export const HeadingText = styled.h2`
  font-size: 3rem;
  padding: 1rem 0 2rem;

  @media (max-width:991px) {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
`;

export const HeadingParagraph = styled(Paragraph)`
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