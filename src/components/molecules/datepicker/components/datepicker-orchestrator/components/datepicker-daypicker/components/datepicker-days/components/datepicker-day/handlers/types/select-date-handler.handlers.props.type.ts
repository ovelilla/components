// Vendors
import { Dispatch, SetStateAction } from 'react';

type SelectDateHandlerPropsType = {
  date: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
};

export { SelectDateHandlerPropsType };
