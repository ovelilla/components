// Vendors
import { Dispatch, SetStateAction } from 'react';

type MouseLeaveEventHandlerPropsType = {
  hideDelay: number;
  hideTimeRef: React.MutableRefObject<number | null>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  showTimeRef: React.MutableRefObject<number | null>;
};

export { MouseLeaveEventHandlerPropsType };
