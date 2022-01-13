import styled from 'styled-components'
import { Button, Paragraph } from '../../GlobalStyles';
import { Icon } from '@iconify/react';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 8vh;
  position: fixed;
  top: 92vh;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2B2A33;
`;

export const FooterText = styled(Paragraph)`
  color: #FFF;
  font-size: 20px;

  @media (max-width:768px) {
    font-size: 1rem;
  }
`;

export const FooterDeleteButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  @media (max-width:991px) {
    width: 100px;
    height: 40px;
  }
`;

export const FooterDeleteButtonIcon = styled(Icon)`
  color: white;
  width: 25px;
  height: 25px;
  margin-left: 10px;
`