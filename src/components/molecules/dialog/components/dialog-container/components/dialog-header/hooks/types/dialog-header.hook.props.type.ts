// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogHeaderHookPropsType = {
  isFullscreen: boolean;
  translate: { x: number; y: number };
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
  setPosition: Dispatch<SetStateAction<{ left: number; top: number }>>;
  setTranslate: Dispatch<SetStateAction<{ x: number; y: number }>>;
  size: { width: number; height: number | null };
};

export { DialogHeaderHookPropsType };
