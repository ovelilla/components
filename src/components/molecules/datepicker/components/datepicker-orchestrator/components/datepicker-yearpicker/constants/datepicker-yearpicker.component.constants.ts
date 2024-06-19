import {
  ButtonComponentAlignmentEnum,
  ButtonComponentBorderRadiusEnum,
  ButtonComponentSizeEnum,
} from 'components/atoms/button/enums/button.component.enums';

const BUTTON_PROPS = {
  alignment: ButtonComponentAlignmentEnum.LEFT,
  borderRadius: ButtonComponentBorderRadiusEnum.NONE,
  fullWidth: true,
  size: ButtonComponentSizeEnum.LARGE,
  type: 'button',
} as const;

export { BUTTON_PROPS };
