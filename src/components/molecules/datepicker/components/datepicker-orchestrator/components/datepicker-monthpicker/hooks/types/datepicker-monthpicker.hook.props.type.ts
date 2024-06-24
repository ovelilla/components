// Vendors
import { Dispatch, SetStateAction } from 'react';

type DatepickerMonthHookPropsType = {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowMonthpicker: Dispatch<SetStateAction<boolean>>;
  showMonthpicker: boolean;
};

export { DatepickerMonthHookPropsType };
