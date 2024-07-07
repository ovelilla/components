// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogHeaderComponentPropsType = {
  onClose: VoidFunction;
  setTranslate: Dispatch<SetStateAction<{ x: number; y: number }>>;
  showCloseButton?: boolean;
  showFullScreenButton?: boolean;
  showTooltips?: boolean;
  title?: string;
  translate: { x: number; y: number };
};

export { DialogHeaderComponentPropsType };
