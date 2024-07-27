// Vendors
import { Dispatch, SetStateAction } from 'react';

type TouchEndEventHandlerPropsType = {
  hideDelay: number;
  hideTimeRef: React.MutableRefObject<number | null>;
  setIsTouch: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  showTimeRef: React.MutableRefObject<number | null>;
};

export { TouchEndEventHandlerPropsType };
