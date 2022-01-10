import styled from 'styled-components';
import { Paragraph } from '../../GlobalStyles';
import { Icon } from '@iconify/react';

export const TasksContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem calc((100vw/12) * 3);
  width: 100%;
`;

export const TasksHeader = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  padding-bottom: 1rem;
`;

export const TasksParagraph = styled(Paragraph)`
`;

export const TasksList = styled.ul`
  list-style: none;
  width: 100%;
`;

export const TaskItem = styled.input`
  background-color: #2B2A33;
  height: 3rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #232229;
  position: relative;
  width: 1.5em;
  height: 1.5em;
  color: black;
  border: 1px solid #E58181;
  border-radius: 4px;
  appearance: none;
  outline: 0;
  cursor: pointer;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  &::before {
    position: absolute;
    content: '';
    display: block;
    top: 0px;
    left: 6px;
    width: 4px;
    height: 12px;
    border-style: solid;
    border-color: #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    color: #E58181;
    border-color: #E58181;
    background: #E58181;
    &::before {
      opacity: 1;
    }
  }
`;

export const TaskEditIcon = styled(Icon)`
  color: #E58181;

  :hover {
    cursor: pointer;
  }
`;