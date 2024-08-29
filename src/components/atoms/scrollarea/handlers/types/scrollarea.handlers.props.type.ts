// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaHandlersPropsType = {
  hideDelay: number;
  isDragging: boolean;
  setShowScrollbar: Dispatch<SetStateAction<boolean>>;
  timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
};

export { ScrollareaHandlersPropsType };
