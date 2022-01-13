import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'Jost', sans-serif;
}

html {
    box-sizing: border-box;
}

body{
    background: #232229;
    color: #FFFFFF;
}

#root {
    display: flex;
    flex-direction: column;
}
`;

export default GlobalStyles;

export const Container = styled.div`
margin: 0 auto;
padding: 0 calc(100vw/12);
max-width: 1300px;
width: 100%;

@media (max-width:400px){
    padding: 0 10px;
}
@media (max-width:991px) {
    padding: 0 1rem;
}

@media (min-width: 1500px) {
    max-width: 1500px;
}

@media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
}
`;


export const Button = styled.button`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 120px;
  height: 50px;
  border-radius: 7px;
  border: none;
  background-image: linear-gradient(180deg, #e1a0a0, #e58181);
  box-shadow: 0 10px 40px #6b3838;

  :hover {
    background-image: linear-gradient(180deg, #E2C1C1, #EA8282)
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: #6C6A7C;

  @media (max-width:991px) {
    font-size: 1rem;
  }
`;