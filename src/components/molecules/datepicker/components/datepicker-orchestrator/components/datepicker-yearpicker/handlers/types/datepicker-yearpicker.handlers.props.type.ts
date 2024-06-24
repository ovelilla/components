// Vendors
import { Dispatch, SetStateAction } from 'react';

type DatepickerMontpickerhHandlersPropsType = {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowYearpicker: Dispatch<SetStateAction<boolean>>;
  yearRefs: React.MutableRefObject<React.RefObject<HTMLButtonElement>[]>;
  yearsRange: {
    end: number;
    start: number;
  };
};

export { DatepickerMontpickerhHandlersPropsType };