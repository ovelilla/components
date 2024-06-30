// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaHandlersPropsType = {
  hideDelay: number;
  setShowScrollbar: Dispatch<SetStateAction<boolean>>;
  timerRef: React.MutableRefObject<number | null>;
};

export { ScrollareaHandlersPropsType };
