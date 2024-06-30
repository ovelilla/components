// Vendors
import { Dispatch, SetStateAction } from 'react';

type MouseLeaveEventHandlerPropsType = {
  hideDelay: number;
  setShowScrollbar: Dispatch<SetStateAction<boolean>>;
  timerRef: React.MutableRefObject<number | null>;
};

export { MouseLeaveEventHandlerPropsType };
