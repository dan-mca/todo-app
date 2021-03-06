import styled from 'styled-components';
import { Paragraph } from '../../GlobalStyles';


export const TasksContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem calc((100vw/12) * 3);
  padding-bottom: 10vh;
  width: 100%;

  @media (max-width:991px) {
    padding: 2rem 1rem;
  }
`;

export const TasksHeader = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  padding-bottom: 0.75rem;
`;

export const TasksParagraph = styled(Paragraph)`
  padding-top: 1.25rem;
`;

export const TasksList = styled.ul`
  list-style: none;
  width: 100%;
`;