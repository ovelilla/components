// Vendors
import { Dispatch, SetStateAction } from 'react';
import { Locale } from 'date-fns';

type DatepickerMonthComponentPropsType = {
  currentDate: Date;
  locale: Locale;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowMonthpicker: Dispatch<SetStateAction<boolean>>;
  showMonthpicker: boolean;
  showYearpicker: boolean;
};

export { DatepickerMonthComponentPropsType };
