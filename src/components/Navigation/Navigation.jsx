import { useAuth } from 'hooks';
import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn ? (
        <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      ) : (
        <NavLinkStyled to="/">Home</NavLinkStyled>
      )}
    </nav>
  );
};
