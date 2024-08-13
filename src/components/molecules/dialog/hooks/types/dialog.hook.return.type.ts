// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogHookReturnType = {
  hasHorizontalScroll: boolean;
  hasVerticalScroll: boolean;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
  shouldClose: boolean;
};

export { DialogHookReturnType };
