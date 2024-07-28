// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogCloseButtonHandlersPropsType = {
  onClose: VoidFunction;
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
};

export { DialogCloseButtonHandlersPropsType };
