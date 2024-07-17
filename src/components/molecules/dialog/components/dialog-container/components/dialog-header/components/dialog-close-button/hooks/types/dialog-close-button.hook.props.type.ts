// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogCloseButtonHookPropsType = {
  onClose: VoidFunction;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
};

export { DialogCloseButtonHookPropsType };
