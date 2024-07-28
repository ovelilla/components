// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogCloseButtonHookPropsType = {
  onClose: VoidFunction;
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
};

export { DialogCloseButtonHookPropsType };
