// Vendors
import { Dispatch, SetStateAction } from 'react';

type MouseDownEventHandlerPropsType = {
  event: React.MouseEvent<HTMLDivElement>;
  translate: { x: number; y: number };
  setTranslate: Dispatch<SetStateAction<{ x: number; y: number }>>;
};

export { MouseDownEventHandlerPropsType };
