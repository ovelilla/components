// Vendors
import { Dispatch, SetStateAction } from 'react';

export type DatepickerMontpickerhHandlersPropsType = {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowYearpicker: Dispatch<SetStateAction<boolean>>;
  yearRefs: React.MutableRefObject<React.RefObject<HTMLButtonElement>[]>;
  yearsRange: {
    end: number;
    start: number;
  };
};
