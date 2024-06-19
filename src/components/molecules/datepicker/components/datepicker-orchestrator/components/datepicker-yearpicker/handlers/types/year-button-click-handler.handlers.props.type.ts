// Vendors
import { Dispatch, SetStateAction } from 'react';

type YearButtonClickHandlerPropsType = {
  yearDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowYearpicker: Dispatch<SetStateAction<boolean>>;
};

export { YearButtonClickHandlerPropsType };
