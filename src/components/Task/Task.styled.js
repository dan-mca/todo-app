import styled from 'styled-components'
import { Icon } from '@iconify/react';

export const TaskItem = styled.li`
  background-color: #2B2A33;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #232229;
`;

export const TaskInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const TaskInputLabel = styled.label`
padding: 0 1rem;
`;

export const TaskInput = styled.input`
  width: 90%;
  height: 100%;
  position: relative;
  left: 20px;
  background-color: transparent;
  border: 1px solid #E58181;
  color: white;
  font-size: 1rem;
  padding-left: 14px;
  &:focus {
    border: 1px solid #E58181;
    outline: none;
    height: 100%;
  }
`;

export const TaskInputCheckbox = styled.input`
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