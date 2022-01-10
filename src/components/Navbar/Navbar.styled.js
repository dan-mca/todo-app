import styled from "styled-components";
import { Container } from "../../GlobalStyles";

export const Nav = styled.nav`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const Logo = styled.h1`
  color: white;
  font-size: 1.5rem;
`;
