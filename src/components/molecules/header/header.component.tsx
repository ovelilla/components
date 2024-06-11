// Components
import { LogoComponent } from './components/logo/logo.component';
import { ModeToggleComponent } from './components/mode-toggle/mode-toggle.component';
import { MobileDrawerComponent } from './components/mobile-drawer/mobile-drawer.component';
// Styles
import {
  HeaderComponentStyled,
  HeaderComponentLeftStyled,
  HeaderComponentRightStyled,
} from './header.component.styled';

const HeaderComponent = (): React.ReactElement => (
  <HeaderComponentStyled>
    <HeaderComponentLeftStyled>
      <LogoComponent />
    </HeaderComponentLeftStyled>
    <HeaderComponentRightStyled>
      <ModeToggleComponent />
      <MobileDrawerComponent />
    </HeaderComponentRightStyled>
  </HeaderComponentStyled>
);

export { HeaderComponent };
