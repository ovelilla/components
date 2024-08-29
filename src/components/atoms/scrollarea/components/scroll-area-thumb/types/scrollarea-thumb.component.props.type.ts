// Vendors
import { Dispatch, SetStateAction } from 'react';
// Enums
import {
  ScrollareaComponentBorderRadiusEnum,
  ScrollareaComponentSizeEnum,
} from 'components/atoms/scrollarea/enums/scrollarea.component.enums';

type ScrollareaThumbComponentPropsType = {
  borderRadius: ScrollareaComponentBorderRadiusEnum;
  contentRef: React.RefObject<HTMLDivElement>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  size: ScrollareaComponentSizeEnum;
  thumbHeight: number;
  thumbRef: React.RefObject<HTMLDivElement>;
  thumbTranslateY: number;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaThumbComponentPropsType };
