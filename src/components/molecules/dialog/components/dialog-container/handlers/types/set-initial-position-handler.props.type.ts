// Vendors
import { Dispatch, SetStateAction } from 'react';

type SetInitialPositionHandlerPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  setPosition: Dispatch<SetStateAction<{ left: number; top: number }>>;
};

export { SetInitialPositionHandlerPropsType };
