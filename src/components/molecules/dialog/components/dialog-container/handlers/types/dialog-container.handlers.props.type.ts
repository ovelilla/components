// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogContainerHandlersPropsType = {
  containerRef: React.RefObject<HTMLDivElement>;
  setPosition: Dispatch<SetStateAction<{ left: number; top: number }>>;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
};

export { DialogContainerHandlersPropsType };
