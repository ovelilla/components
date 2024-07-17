// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogCloseButtonHandlersPropsType = {
  onClose: VoidFunction;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
};

export { DialogCloseButtonHandlersPropsType };
