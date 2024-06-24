// Vendors
import { Dispatch, SetStateAction } from 'react';
// Enums
import {
  ScrollareaComponentBorderRadiusEnum,
  ScrollareaComponentGapEnum,
  ScrollareaComponentSizeEnum,
} from 'components/atoms/scrollarea/enums/scrollarea.component.enums';

type ScrollareaThumbComponentPropsType = {
  borderRadius: ScrollareaComponentBorderRadiusEnum;
  gap: ScrollareaComponentGapEnum;
  contentRef: React.RefObject<HTMLDivElement>;
  initialPointerY: number;
  initialScrollTop: number;
  isDragging: boolean;
  setInitialPointerY: Dispatch<SetStateAction<number>>;
  setInitialScrollTop: Dispatch<SetStateAction<number>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  setThumbHeight: Dispatch<SetStateAction<number>>;
  setThumbTranslateY: Dispatch<SetStateAction<number>>;
  size: ScrollareaComponentSizeEnum;
  thumbHeight: number;
  thumbRef: React.RefObject<HTMLDivElement>;
  thumbTranslateY: number;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaThumbComponentPropsType };
