// Vendors
import { Dispatch, SetStateAction } from 'react';

type SetInitialPositionHandlerPropsType = {
  containerRef: React.RefObject<HTMLDivElement>;
  setPosition: Dispatch<SetStateAction<{ left: number; top: number }>>;
};

export { SetInitialPositionHandlerPropsType };
