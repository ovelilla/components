// Vendors
import { Dispatch, SetStateAction } from 'react';

type ThumbMouseUpEventHandlerPropsType = {
  setInitialScrollTop: Dispatch<SetStateAction<number>>;
  setInitialPointerY: Dispatch<SetStateAction<number>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
};

export { ThumbMouseUpEventHandlerPropsType };
