// Enums
import {
  ButtonComponentFontSizeEnum,
  ButtonComponentGapEnum,
  ButtonComponentPaddingEnum,
  ButtonComponentShapeEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';

const DEFAULT_BUTTON_PROPS = {
  shape: ButtonComponentShapeEnum.CIRCLE,
  type: 'button',
} as const;

const CURRENT_YEAR_BUTTON_PROPS = {
  fontSize: ButtonComponentFontSizeEnum.SMALL,
  gap: ButtonComponentGapEnum.SMALL,
  padding: ButtonComponentPaddingEnum.SMALL,
  variant: ButtonComponentVariantEnum.GHOST,
  type: 'button',
} as const;

const NEXT_YEAR_BUTTON_PROPS = {
  ...DEFAULT_BUTTON_PROPS,
  'aria-label': 'Next yaer',
} as const;

const PREV_YEAR_BUTTON_PROPS = {
  ...DEFAULT_BUTTON_PROPS,
  'aria-label': 'Previous yaer',
} as const;

export { CURRENT_YEAR_BUTTON_PROPS, NEXT_YEAR_BUTTON_PROPS, PREV_YEAR_BUTTON_PROPS };
