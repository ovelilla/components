// Vendors
import { Dispatch, SetStateAction } from 'react';

export type DatepickerYearHandlersPropsType = {
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowYearpicker: Dispatch<SetStateAction<boolean>>;
};
