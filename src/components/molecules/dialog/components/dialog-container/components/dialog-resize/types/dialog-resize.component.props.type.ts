// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogResizeComponentPropsType = {
  disabled?: boolean;
  minSize: { width: number; height: number };
  setSize: Dispatch<SetStateAction<{ width: number; height: number | null }>>;
  setTranslate: Dispatch<SetStateAction<{ x: number; y: number }>>;
  size: { width: number; height: number | null };
  translate: { x: number; y: number };
};

export { DialogResizeComponentPropsType };
