// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogOverlayHandlersPropsType = {
  shouldClose: boolean;
  onClose: VoidFunction;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
};

export { DialogOverlayHandlersPropsType };
