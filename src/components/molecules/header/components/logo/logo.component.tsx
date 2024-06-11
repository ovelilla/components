// Vendors
import { LinkComponent } from 'components/atoms/link/link.component';
// Constants
import { LINK_PROPS } from './constants/logo.component.constants';
// Styles
import { LogoComponentStyled } from './logo.component.styled';

const LogoComponent = (): React.ReactElement => {
  return (
    <LogoComponentStyled>
      <LinkComponent {...LINK_PROPS}>Components</LinkComponent>
    </LogoComponentStyled>
  );
};

export { LogoComponent };
