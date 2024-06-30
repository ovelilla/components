// Vendors
import { Dispatch, SetStateAction } from 'react';

type TooltipHandlersPropsType = {
  hideDelay: number;
  hideTimeRef: React.MutableRefObject<number | null>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  showDelay: number;
  showTimeRef: React.MutableRefObject<number | null>;
};

export { TooltipHandlersPropsType };
