// Vendors
import { Dispatch, SetStateAction } from 'react';

type MouseLeaveEventHandlerPropsType = {
  hideDelay: number;
  hideTimeRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
  isTouch: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  showTimeRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
};

export { MouseLeaveEventHandlerPropsType };
