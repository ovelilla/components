// Vendors
import { Dispatch, SetStateAction } from 'react';

type MouseEnterEventHandlerPropsType = {
  setShowScrollbar: Dispatch<SetStateAction<boolean>>;
  timerRef: React.MutableRefObject<number | null>;
};

export { MouseEnterEventHandlerPropsType };
