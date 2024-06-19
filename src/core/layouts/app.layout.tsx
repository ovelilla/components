// Vendors
import { Outlet } from 'react-router-dom';
// Components
import { HeaderComponent } from 'components/molecules/header/header.component';
import { LogoComponent } from 'components/molecules/logo/logo.component';
import { SidenavComponent } from 'components/molecules/sidenav/sidenav.component';
// Styles
import {
  AppLayoutStyled,
  AppLayoutLeftBodyStyled,
  AppLayoutLeftHeaderStyled,
  AppLayoutLeftStyled,
  AppLayoutMainStyled,
  AppLayoutRightStyled,
  AppLeftLayoutFooterStyled,
} from './app.layout.styled';

const AppLayout = (): React.ReactElement => (
  <AppLayoutStyled>
    <AppLayoutLeftStyled>
      <AppLayoutLeftHeaderStyled>
        <LogoComponent />
      </AppLayoutLeftHeaderStyled>
      <AppLayoutLeftBodyStyled>
        <SidenavComponent />
      </AppLayoutLeftBodyStyled>
      <AppLeftLayoutFooterStyled></AppLeftLayoutFooterStyled>
    </AppLayoutLeftStyled>
    <AppLayoutRightStyled>
      <HeaderComponent />
      <AppLayoutMainStyled>
        <Outlet />
      </AppLayoutMainStyled>
    </AppLayoutRightStyled>
  </AppLayoutStyled>
);

export { AppLayout };
