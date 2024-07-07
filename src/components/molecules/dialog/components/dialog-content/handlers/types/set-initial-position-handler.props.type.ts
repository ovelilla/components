// Vendors
import { Dispatch, SetStateAction } from 'react';

type SetInitialPositionHandlerPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
};

export { SetInitialPositionHandlerPropsType };
