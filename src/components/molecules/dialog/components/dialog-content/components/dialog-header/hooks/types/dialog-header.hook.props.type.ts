// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogHeaderHookPropsType = {
  translate: { x: number; y: number };
  setTranslate: Dispatch<SetStateAction<{ x: number; y: number }>>;
};

export { DialogHeaderHookPropsType };
