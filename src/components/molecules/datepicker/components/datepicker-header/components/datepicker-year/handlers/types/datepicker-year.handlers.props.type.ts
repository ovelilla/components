// Vendors
import { Dispatch, SetStateAction } from 'react';

type DatepickerYearHandlersPropsType = {
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowYearpicker: Dispatch<SetStateAction<boolean>>;
};

export { DatepickerYearHandlersPropsType };
