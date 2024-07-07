// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogHeaderHandlersPropsType = {
  translate: { x: number; y: number };
  setTranslate: Dispatch<SetStateAction<{ x: number; y: number }>>;
};

export { DialogHeaderHandlersPropsType };
