// Enums
import {
  ButtonComponentPaddingEnum,
  ButtonComponentShapeEnum,
} from 'components/atoms/button/enums/button.component.enums';

const BUTTON_PROPS = {
  fullWidth: true,
  padding: ButtonComponentPaddingEnum.NONE,
  shape: ButtonComponentShapeEnum.RECTANGLE,
  type: 'button',
} as const;

export { BUTTON_PROPS };
