// Enums
import { DatepickerDayComponentStatesEnum } from '../../enums/datepicker-day.component.enums';

export type DatepickerDayHookReturnType = {
  day: string;
  handleSelectDate: (date: Date) => void;
  state: DatepickerDayComponentStatesEnum;
};
