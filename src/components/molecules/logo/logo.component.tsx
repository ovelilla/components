// Vendors
import { LinkComponent } from 'components/atoms/link/link.component';
// Constants
import { ICON_PROPS, LINK_PROPS, LOGO_NAME } from './constants/logo.component.constants';
// Icons
import { Squirrel } from 'lucide-react';
// Styles
import { LogoComponentStyled } from './logo.component.styled';

const LogoComponent = (): React.ReactElement => {
  return (
    <LogoComponentStyled>
      <LinkComponent {...LINK_PROPS}>
        <Squirrel {...ICON_PROPS} />
        {LOGO_NAME}
      </LinkComponent>
    </LogoComponentStyled>
  );
};

export { LogoComponent };
