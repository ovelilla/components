// Vendors
import { Dispatch, SetStateAction } from 'react';
import { Locale } from 'date-fns';

type DatepickerYearpickerComponentPropsType = {
  currentDate: Date;
  locale: Locale;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowYearpicker: Dispatch<SetStateAction<boolean>>;
  showYearpicker: boolean;
  yearsRange: {
    end: number;
    start: number;
  };
};

export { DatepickerYearpickerComponentPropsType };
