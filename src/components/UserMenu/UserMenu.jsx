import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { NavLinkStyled } from '../Navigation/Navigation.styled';
import { UserContainer, UserEmail } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserContainer>
      <UserEmail>{user.email}</UserEmail>
      <NavLinkStyled type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </NavLinkStyled>
    </UserContainer>
  );
};
