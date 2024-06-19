// Vendors
import { Dispatch, SetStateAction } from 'react';
import { Locale } from 'date-fns';

type DatepickerYearComponentPropsType = {
  currentDate: Date;
  locale: Locale;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowYearpicker: Dispatch<SetStateAction<boolean>>;
  showMonthpicker: boolean;
  showYearpicker: boolean;
};

export { DatepickerYearComponentPropsType };
