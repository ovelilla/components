// Vendors
import { Dispatch, SetStateAction } from 'react';

type TooltipHandlersPropsType = {
  hideDelay: number;
  hideTimeRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
  isTouch: boolean;
  setIsTouch: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  showDelay: number;
  showTimeRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
};

export { TooltipHandlersPropsType };
