// Vendors
import { Dispatch, SetStateAction } from 'react';

type ResizeEventHandlerPropsType = {
  open: boolean;
  setHasHorizontalScroll: Dispatch<SetStateAction<boolean>>;
  setHasVerticalScroll: Dispatch<SetStateAction<boolean>>;
};

export { ResizeEventHandlerPropsType };
