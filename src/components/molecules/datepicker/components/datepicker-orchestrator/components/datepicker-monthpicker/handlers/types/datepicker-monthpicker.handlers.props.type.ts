// Vendors
import { Dispatch, SetStateAction } from 'react';

type DatepickerMonthpickerhHandlersPropsType = {
  currentDate: Date;
  monthRefs: React.MutableRefObject<React.RefObject<HTMLButtonElement>[]>;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowMonthpicker: Dispatch<SetStateAction<boolean>>;
};

export { DatepickerMonthpickerhHandlersPropsType };
