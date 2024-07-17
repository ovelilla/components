// Vendors
import React, { Dispatch, SetStateAction } from 'react';

type TouchStartEventHandlerPropsType = {
  event: React.TouchEvent<HTMLDivElement>;
  isFullScreen: boolean;
  translate: { x: number; y: number };
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
  setPosition: Dispatch<SetStateAction<{ left: number; top: number }>>;
  setTranslate: Dispatch<SetStateAction<{ x: number; y: number }>>;
  size: { width: number; height: number | null };
};

export { TouchStartEventHandlerPropsType };
