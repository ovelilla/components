// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogOverlayHookPropsType = {
  onClose: VoidFunction;
  open: boolean;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
  shouldClose: boolean;
};

export { DialogOverlayHookPropsType };
