// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogContainerHookPropsType = {
  initialIsFullscreen: boolean;
  initialMinSize?: { width?: number; height?: number };
  initialPosition?: { left?: number; top?: number };
  initialSize?: { width?: number; height?: number };
  setShouldClose: Dispatch<SetStateAction<boolean>>;
};

export { DialogContainerHookPropsType };
