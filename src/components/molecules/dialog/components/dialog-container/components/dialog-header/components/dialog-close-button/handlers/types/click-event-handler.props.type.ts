// Vendors
import { Dispatch, SetStateAction } from 'react';

type ClickEventHandlerPropsType = {
  onClose: VoidFunction;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
};

export { ClickEventHandlerPropsType };
