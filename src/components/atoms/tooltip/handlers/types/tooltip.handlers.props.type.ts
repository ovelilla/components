// Vendors
import { Dispatch, SetStateAction } from 'react';

type TooltipHandlersPropsType = {
  hideDelay: number;
  hideTimeRef: React.MutableRefObject<number | null>;
  isTouch: boolean;
  setIsTouch: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  showDelay: number;
  showTimeRef: React.MutableRefObject<number | null>;
};

export { TooltipHandlersPropsType };
