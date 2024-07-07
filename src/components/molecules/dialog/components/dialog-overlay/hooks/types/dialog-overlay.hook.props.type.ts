// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogOverlayHookPropsType = {
  shouldClose: boolean;
  onClose: VoidFunction;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
};

export { DialogOverlayHookPropsType };
