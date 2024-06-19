// Enums
import { ButtonComponentShapeEnum } from 'components/atoms/button/enums/button.component.enums';

const BUTTON_PROPS = {
  'aria-label': 'Open mobile drawer',
  shape: ButtonComponentShapeEnum.CIRCLE,
  type: 'button',
} as const;

const ICON_PROPS = {
  size: 20,
} as const;

export { BUTTON_PROPS, ICON_PROPS };
