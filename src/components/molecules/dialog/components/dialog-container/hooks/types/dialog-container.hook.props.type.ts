// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogContainerHookPropsType = {
  initialIsFullscreen: boolean;
  initialSize?: { width?: number; height?: number };
  setShouldClose: Dispatch<SetStateAction<boolean>>;
};

export { DialogContainerHookPropsType };
