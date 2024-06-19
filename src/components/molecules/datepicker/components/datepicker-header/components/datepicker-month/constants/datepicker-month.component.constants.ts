// Enums
import {
  ButtonComponentShapeEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';

const DEFAULT_BUTTON_PROPS = {
  shape: ButtonComponentShapeEnum.CIRCLE,
  type: 'button',
} as const;

const CURRENT_MONTH_BUTTON_PROPS = {
  variant: ButtonComponentVariantEnum.GHOST,
  type: 'button',
} as const;

const NEXT_MONTH_BUTTON_PROPS = {
  ...DEFAULT_BUTTON_PROPS,
  'aria-label': 'Next month',
} as const;

const PREV_MONTH_BUTTON_PROPS = {
  ...DEFAULT_BUTTON_PROPS,
  'aria-label': 'Previous month',
} as const;

export { CURRENT_MONTH_BUTTON_PROPS, NEXT_MONTH_BUTTON_PROPS, PREV_MONTH_BUTTON_PROPS };
