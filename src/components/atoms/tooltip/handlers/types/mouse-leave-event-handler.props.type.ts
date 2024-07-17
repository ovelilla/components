// Vendors
import { Dispatch, SetStateAction } from 'react';

type MouseLeaveEventHandlerPropsType = {
  hideDelay: number;
  hideTimeRef: React.MutableRefObject<number | null>;
  isTouch: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  showTimeRef: React.MutableRefObject<number | null>;
};

export { MouseLeaveEventHandlerPropsType };
