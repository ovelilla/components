// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogContainerHandlersPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  setPosition: Dispatch<SetStateAction<{ left: number; top: number }>>;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
};

export { DialogContainerHandlersPropsType };
