import { Navigation } from '../Navigation';
import { UserMenu } from '../UserMenu';
import { AuthNav } from '../AuthNav';
import { useAuth } from 'hooks';
import { AppBarStyled, AppBarContainer } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarStyled>
      <AppBarContainer>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarContainer>
    </AppBarStyled>
  );
};
