import styled from 'styled-components';
import { Button, Paragraph } from '../../GlobalStyles'
import { HeadingNameInput } from '../Header/Header.styled';

export const AddTaskContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem calc((100vw/12) * 3);
  width: calc(100% + 20px);

  @media (max-width:991px) {
    padding: 1rem 1rem;
  }
`;

export const AddTaskInput = styled(HeadingNameInput)`
  width: 100%;
  font-size: 1rem;
`;


export const AddTaskButton = styled(Button)`
  width: 20px;
  height: 20px;
  position: relative;
  right: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-weight: normal;
  color: #2B2A33;
`;
