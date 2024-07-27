// Vendors
import { Dispatch, SetStateAction } from 'react';

type TouchStartEventHandlerPropsType = {
  hideTimeRef: React.MutableRefObject<number | null>;
  setIsTouch: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  showDelay: number;
  showTimeRef: React.MutableRefObject<number | null>;
};

export { TouchStartEventHandlerPropsType };
