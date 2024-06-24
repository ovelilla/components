// Vendors
import { Dispatch, SetStateAction } from 'react';

type DatepickerMonthHandlersPropsType = {
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowMonthpicker: Dispatch<SetStateAction<boolean>>;
};

export { DatepickerMonthHandlersPropsType };