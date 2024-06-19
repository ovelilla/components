// Vendors
import { Dispatch, SetStateAction } from 'react';

export type DatepickerMontpickerhHandlersPropsType = {
  currentDate: Date;
  monthRefs: React.MutableRefObject<React.RefObject<HTMLButtonElement>[]>;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowMonthpicker: Dispatch<SetStateAction<boolean>>;
};
