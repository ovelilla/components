// Vendors
import { Dispatch, SetStateAction } from 'react';

export type DatepickerMonthHandlersPropsType = {
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowMonthpicker: Dispatch<SetStateAction<boolean>>;
};
