// Vendors
import { Dispatch, SetStateAction } from 'react';

type ClickEventHandlerPropsType = {
  onClose: VoidFunction;
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
};

export { ClickEventHandlerPropsType };
