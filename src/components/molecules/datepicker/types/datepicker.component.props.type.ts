// Enums
import {
  ButtonComponentShapeEnum,
  ButtonComponentSizeEnum,
} from 'components/atoms/button/enums/button.component.enums';
import {
  DatepickerComponentBorderEnum,
  DatepickerComponentBorderRadiusEnum,
  DatepickerComponentBoxShadowEnum,
} from '../enums/datepicker.component.enumerations';

type DatepickerComponentPropsType = {
  border?: DatepickerComponentBorderEnum;
  borderRadius?: DatepickerComponentBorderRadiusEnum;
  boxShadow?: DatepickerComponentBoxShadowEnum;
  buttonShape?: ButtonComponentShapeEnum;
  buttonSize?: ButtonComponentSizeEnum;
  localeCode?: string;
  value?: string;
  yearsRange?: {
    start: number;
    end: number;
  };
};

export { DatepickerComponentPropsType };
