// Vendors
import { Dispatch, SetStateAction } from 'react';

type TouchEndEventHandlerPropsType = {
  hideDelay: number;
  hideTimeRef: React.MutableRefObject<number | null>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  showTimeRef: React.MutableRefObject<number | null>;
};

export { TouchEndEventHandlerPropsType };
