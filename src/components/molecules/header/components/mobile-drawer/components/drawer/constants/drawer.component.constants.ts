// Enums
import { ButtonComponentTypesEnum } from 'components/atoms/button/enums/button.enums';

const BUTTON_PROPS = {
  'aria-label': 'Open mobile drawer',
  buttonType: ButtonComponentTypesEnum.ICON,
  type: 'button',
} as const;

const ICON_PROPS = {
  size: 20,
} as const;

export { BUTTON_PROPS, ICON_PROPS };
