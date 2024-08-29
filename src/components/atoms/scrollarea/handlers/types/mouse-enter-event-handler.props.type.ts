// Vendors
import { Dispatch, SetStateAction } from 'react';

type MouseEnterEventHandlerPropsType = {
  setShowScrollbar: Dispatch<SetStateAction<boolean>>;
  timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
};

export { MouseEnterEventHandlerPropsType };
