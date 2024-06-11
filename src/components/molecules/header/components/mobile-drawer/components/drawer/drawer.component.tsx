// Vendors
import ReactDOM from 'react-dom';
// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
// Constants
import { BUTTON_PROPS, ICON_PROPS } from './constants/drawer.component.constants';
// Icons
import { X } from 'lucide-react';
// Styles
import { DrawerComponentStyled } from './drawer.component.styled';
// Types
import { DrawerComponentPropsType } from './types/drawer.component.props.type';

const DrawerComponent = ({
  onClick,
  open,
}: DrawerComponentPropsType): React.ReactElement | null => {
  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <DrawerComponentStyled>
      <ButtonComponent
        {...{
          onClick,
          ...BUTTON_PROPS,
        }}>
        <X {...ICON_PROPS} />
      </ButtonComponent>
    </DrawerComponentStyled>,
    document.body
  );
};

export { DrawerComponent };
