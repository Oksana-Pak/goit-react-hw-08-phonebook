import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  color: #ffffff;
  opacity: 0.8;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.1);

  &:hover,
  &:focus {
    color: rgba(0, 0, 0, 0.6);
    outline: none;
    background-color: rgba(255, 255, 255, 0.3);
  }
  &.active {
    color: rgba(0, 0, 0, 0.4);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
