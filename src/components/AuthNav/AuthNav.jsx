import { NavLinkStyled } from '../Navigation/Navigation.styled';
import { NavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavContainer>
      <li>
        <NavLinkStyled to="/register">Sign Up</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/login">Log In</NavLinkStyled>
      </li>
    </NavContainer>
  );
};
