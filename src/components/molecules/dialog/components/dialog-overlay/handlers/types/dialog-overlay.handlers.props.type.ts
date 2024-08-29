// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogOverlayHandlersPropsType = {
  onClose: VoidFunction;
  open: boolean;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
  setShouldRender: Dispatch<SetStateAction<boolean>>;
  shouldClose: boolean;
};

export { DialogOverlayHandlersPropsType };
