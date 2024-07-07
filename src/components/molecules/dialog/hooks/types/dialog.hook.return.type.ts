// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogHookReturnType = {
  hasHorizontalScroll: boolean;
  hasVerticalScroll: boolean;
  overlayRef: React.RefObject<HTMLDivElement>;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
  shouldClose: boolean;
};

export { DialogHookReturnType };
