// Enumerations
import { ButtonComponentTypesEnumeration } from 'components/atoms/button/enumerations/button.component.enumerations';

const BUTTON_PROPS = {
  'aria-label': 'Open mobile drawer',
  buttonType: ButtonComponentTypesEnumeration.ICON,
  type: 'button',
} as const;

const ICON_PROPS = {
  size: 20,
} as const;

export { BUTTON_PROPS, ICON_PROPS };
