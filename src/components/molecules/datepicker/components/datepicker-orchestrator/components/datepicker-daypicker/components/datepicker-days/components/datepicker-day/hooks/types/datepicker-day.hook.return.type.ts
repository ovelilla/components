// Enums
import { DatepickerDayComponentStatesEnum } from '../../enums/datepicker-day.component.enums';

type DatepickerDayHookReturnType = {
  day: string;
  handleSelectDate: (date: Date) => void;
  state: DatepickerDayComponentStatesEnum;
};

export { DatepickerDayHookReturnType };
