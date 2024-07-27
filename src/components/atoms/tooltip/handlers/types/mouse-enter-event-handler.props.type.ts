// Vendors
import { Dispatch, SetStateAction } from 'react';

type MouseEnterEventHandlerPropsType = {
  hideTimeRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
  isTouch: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  showDelay: number;
  showTimeRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
};

export { MouseEnterEventHandlerPropsType };
