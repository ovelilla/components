// Vendors
import { Outlet } from 'react-router-dom';
// Components
import { HeaderComponent } from 'components/molecules/header/header.component';
// Styles
import {
  AppLayoutStyled,
  AppLayoutLeftStyled,
  AppLayoutRightStyled,
  AppLayoutMainStyled,
} from './app.layout.styled';

const AppLayout = (): React.ReactElement => (
  <AppLayoutStyled>
    <AppLayoutLeftStyled></AppLayoutLeftStyled>
    <AppLayoutRightStyled>
      <HeaderComponent />
      <AppLayoutMainStyled>
        <Outlet />
      </AppLayoutMainStyled>
    </AppLayoutRightStyled>
  </AppLayoutStyled>
);

export { AppLayout };
