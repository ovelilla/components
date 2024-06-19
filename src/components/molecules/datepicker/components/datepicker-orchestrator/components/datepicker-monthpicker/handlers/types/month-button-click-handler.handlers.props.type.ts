// Vendors
import { Dispatch, SetStateAction } from 'react';

type MonthButtonClickHandlerPropsType = {
  monthDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowMonthpicker: Dispatch<SetStateAction<boolean>>;
};

export { MonthButtonClickHandlerPropsType };
