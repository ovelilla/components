// Vendors
import { Dispatch, SetStateAction } from 'react';

type BottomRightCornerPointerDownEventHandlerPropsType = {
  disabled?: boolean;
  event: React.PointerEvent<HTMLDivElement>;
  minSize: { width: number; height: number };
  setSize: Dispatch<SetStateAction<{ width: number; height: number | null }>>;
  size: { width: number; height: number | null };
};

export { BottomRightCornerPointerDownEventHandlerPropsType };
