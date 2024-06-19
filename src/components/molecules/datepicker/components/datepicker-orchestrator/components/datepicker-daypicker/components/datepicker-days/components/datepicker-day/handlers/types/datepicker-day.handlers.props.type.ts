// Vendors
import { Dispatch, SetStateAction } from 'react';

type DatepickerDayHandlersPropsType = {
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
};

export { DatepickerDayHandlersPropsType };
