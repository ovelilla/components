// Vendors
import { Dispatch, SetStateAction } from 'react';

type MouseEnterEventHandlerPropsType = {
  hideTimeRef: React.MutableRefObject<number | null>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  showDelay: number;
  showTimeRef: React.MutableRefObject<number | null>;
};

export { MouseEnterEventHandlerPropsType };
