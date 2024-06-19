// Vendors
import { Dispatch, SetStateAction } from 'react';
import { Locale } from 'date-fns';
// Enums
import {
  ButtonComponentShapeEnum,
  ButtonComponentSizeEnum,
} from 'components/atoms/button/enums/button.component.enums';

type DatepickerDayComponentPropsType = {
  buttonShape: ButtonComponentShapeEnum;
  buttonSize: ButtonComponentSizeEnum;
  currentDate: Date;
  date: Date;
  locale: Locale;
  selectedDate: Date | null;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
};

export { DatepickerDayComponentPropsType };
