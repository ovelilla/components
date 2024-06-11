// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
// Constants
import { BUTTON_PROPS, ICON_PROPS } from './constants/trigger.component.constants';
// Icons
import { Menu } from 'lucide-react';
// Styles
import { TriggerComponentStyled } from './trigger.component.styled';
// Types
import { TriggerComponentPropsType } from './types/trigger.component.props.type';

const TriggerComponent = ({ onClick }: TriggerComponentPropsType): React.ReactElement => {
  return (
    <TriggerComponentStyled>
      <ButtonComponent
        {...{
          onClick,
          ...BUTTON_PROPS,
        }}>
        <Menu {...ICON_PROPS} />
      </ButtonComponent>
    </TriggerComponentStyled>
  );
};

export { TriggerComponent };
