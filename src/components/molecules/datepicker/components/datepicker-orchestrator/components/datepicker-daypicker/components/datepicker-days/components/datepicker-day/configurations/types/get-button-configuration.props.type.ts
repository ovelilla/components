// Enums
import {
  ButtonComponentShapeEnum,
  ButtonComponentSizeEnum,
} from 'components/atoms/button/enums/button.component.enums';
import { DatepickerDayComponentStatesEnum } from '../../enums/datepicker-day.component.enums';

type GetButtonConfigurationPropsType = {
  buttonShape: ButtonComponentShapeEnum;
  buttonSize: ButtonComponentSizeEnum;
  date: Date;
  handleSelectDate: (date: Date) => void;
  state: DatepickerDayComponentStatesEnum;
};

export { GetButtonConfigurationPropsType };
