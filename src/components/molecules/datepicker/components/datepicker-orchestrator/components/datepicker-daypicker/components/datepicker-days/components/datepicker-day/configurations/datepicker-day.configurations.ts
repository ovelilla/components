// Constants
import { BUTTON_PROPS } from '../constants/datepicker-day.component.constnats';
// Enums
import {
  ButtonComponentOpacityEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';
import { DatepickerDayComponentStatesEnum } from '../enums/datepicker-day.component.enums';
// Types
import { GetButtonConfigurationPropsType } from './types/get-button-configuration.props.type';
import { GetButtonConfigurationReturnType } from './types/get-button-configuration.return.type';

const getButtonOpacity = ({ state }: Pick<GetButtonConfigurationPropsType, 'state'>): number => {
  const stateToOpacityMap = {
    [DatepickerDayComponentStatesEnum.DEFAULT]: ButtonComponentOpacityEnum.FULL,
    [DatepickerDayComponentStatesEnum.DISABLED]: ButtonComponentOpacityEnum.MEDIUM,
    [DatepickerDayComponentStatesEnum.DISABLED_TODAY]: ButtonComponentOpacityEnum.MEDIUM,
    [DatepickerDayComponentStatesEnum.OUTSIDE]: ButtonComponentOpacityEnum.MEDIUM,
    [DatepickerDayComponentStatesEnum.OUTSIDE_SELECTED]: ButtonComponentOpacityEnum.FULL,
    [DatepickerDayComponentStatesEnum.OUTSIDE_TODAY]: ButtonComponentOpacityEnum.MEDIUM,
    [DatepickerDayComponentStatesEnum.SELECTED]: ButtonComponentOpacityEnum.FULL,
    [DatepickerDayComponentStatesEnum.TODAY]: ButtonComponentOpacityEnum.FULL,
  };

  return stateToOpacityMap[state];
};

const getButtonVariant = ({
  state,
}: Pick<GetButtonConfigurationPropsType, 'state'>): ButtonComponentVariantEnum => {
  const stateToVariantMap = {
    [DatepickerDayComponentStatesEnum.DEFAULT]: ButtonComponentVariantEnum.GHOST,
    [DatepickerDayComponentStatesEnum.DISABLED]: ButtonComponentVariantEnum.GHOST,
    [DatepickerDayComponentStatesEnum.DISABLED_TODAY]: ButtonComponentVariantEnum.OUTLINE,
    [DatepickerDayComponentStatesEnum.OUTSIDE]: ButtonComponentVariantEnum.GHOST,
    [DatepickerDayComponentStatesEnum.OUTSIDE_SELECTED]: ButtonComponentVariantEnum.SECONDARY,
    [DatepickerDayComponentStatesEnum.OUTSIDE_TODAY]: ButtonComponentVariantEnum.OUTLINE,
    [DatepickerDayComponentStatesEnum.SELECTED]: ButtonComponentVariantEnum.PRIMARY,
    [DatepickerDayComponentStatesEnum.TODAY]: ButtonComponentVariantEnum.OUTLINE,
  };

  return stateToVariantMap[state];
};

const getButtonConfiguration = ({
  buttonSize,
  date,
  buttonShape,
  handleSelectDate,
  state,
}: GetButtonConfigurationPropsType): GetButtonConfigurationReturnType => ({
  ...BUTTON_PROPS,
  onClick: () => handleSelectDate(date),
  opacity: getButtonOpacity({ state }),
  shape: buttonShape,
  size: buttonSize,
  variant: getButtonVariant({ state }),
});

export { getButtonConfiguration };
