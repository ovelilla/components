import {
  ButtonComponentBorderRadiusEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';

const DEFAULT_BUTTON_CANCEL_PROPS = {
  borderRadius: ButtonComponentBorderRadiusEnum.FULL,
  children: 'Cancel',
  variant: ButtonComponentVariantEnum.OUTLINE,
};

const DEFAULT_BUTTON_CLOSE_PROPS = {
  tooltipProps: {
    title: 'Close dialog',
  },
};

const DEFAULT_BUTTON_CONFIRM_PROPS = {
  borderRadius: ButtonComponentBorderRadiusEnum.FULL,
  children: 'Confirm',
  variant: ButtonComponentVariantEnum.PRIMARY,
};

const DEFAULT_BUTTON_FULLSCREEN_PROPS = {
  buttonProps: {
    show: false,
  },
};

const DEFAULT_SIZE = {
  width: 400,
};

export {
  DEFAULT_BUTTON_CANCEL_PROPS,
  DEFAULT_BUTTON_CLOSE_PROPS,
  DEFAULT_BUTTON_CONFIRM_PROPS,
  DEFAULT_BUTTON_FULLSCREEN_PROPS,
  DEFAULT_OPEN,
  DEFAULT_SIZE,
};
