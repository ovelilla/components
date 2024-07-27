// Vendors
import { Dispatch, SetStateAction } from 'react';

type TouchEndEventHandlerPropsType = {
  hideDelay: number;
  hideTimeRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
  setIsTouch: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  showTimeRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
};

export { TouchEndEventHandlerPropsType };
