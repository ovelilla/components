// Vendors
import { Dispatch, SetStateAction } from 'react';

type TouchStartEventHandlerPropsType = {
  hideTimeRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
  setIsTouch: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  showDelay: number;
  showTimeRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
};

export { TouchStartEventHandlerPropsType };
