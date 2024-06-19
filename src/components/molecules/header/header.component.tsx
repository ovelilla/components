// Components
import { LogoComponent } from '../logo/logo.component';
import { ModeToggleComponent } from './components/mode-toggle/mode-toggle.component';
// import { MobileDrawerComponent } from './components/mobile-drawer/mobile-drawer.component';
// Styles
import {
  HeaderComponentStyled,
  HeaderComponentLeftStyled,
  HeaderComponentLogoWrapperStyled,
  HeaderComponentRightStyled,
} from './header.component.styled';

const HeaderComponent = (): React.ReactElement => (
  <HeaderComponentStyled>
    <HeaderComponentLeftStyled>
      <HeaderComponentLogoWrapperStyled>
        <LogoComponent />
      </HeaderComponentLogoWrapperStyled>
    </HeaderComponentLeftStyled>
    <HeaderComponentRightStyled>
      <ModeToggleComponent />
      {/* <MobileDrawerComponent /> */}
    </HeaderComponentRightStyled>
  </HeaderComponentStyled>
);

export { HeaderComponent };
