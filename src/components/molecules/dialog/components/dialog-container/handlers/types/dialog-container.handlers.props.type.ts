// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogContainerHandlersPropsType = {
  containerRef: React.RefObject<HTMLDivElement>;
  open: boolean;
  setPosition: Dispatch<SetStateAction<{ left: number; top: number }>>;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
  setShouldRender: Dispatch<SetStateAction<boolean>>;
};

export { DialogContainerHandlersPropsType };
