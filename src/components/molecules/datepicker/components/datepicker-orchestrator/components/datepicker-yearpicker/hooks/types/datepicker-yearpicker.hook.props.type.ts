// Vendors
import { Dispatch, SetStateAction } from 'react';

type DatepickerYearHookPropsType = {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowYearpicker: Dispatch<SetStateAction<boolean>>;
  showYearpicker: boolean;
  yearsRange: {
    end: number;
    start: number;
  };
};

export { DatepickerYearHookPropsType };