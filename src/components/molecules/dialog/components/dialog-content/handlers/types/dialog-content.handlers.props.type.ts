// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogContentHandlersPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
};

export { DialogContentHandlersPropsType };
