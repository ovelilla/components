// Vendors
import { Dispatch, SetStateAction } from 'react';

type PointerDownEventHandlerPropsType = {
  event: React.PointerEvent<HTMLDivElement>;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
};

export { PointerDownEventHandlerPropsType };
