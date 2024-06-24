// Vendors
import { Dispatch, SetStateAction } from 'react';

type ThumbTouchEndEventHandlerPropsType = {
  setInitialScrollTop: Dispatch<SetStateAction<number>>;
  setInitialPointerY: Dispatch<SetStateAction<number>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
};

export { ThumbTouchEndEventHandlerPropsType };
