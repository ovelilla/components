// Vendors
import { Dispatch, SetStateAction } from 'react';
// Enums
import {
  ScrollareaComponentBorderRadiusEnum,
  ScrollareaComponentSizeEnum,
  ScrollareaComponentVariantEnum,
} from 'components/atoms/scrollarea/enums/scrollarea.component.enums';

type ScrollareaTrackComponentPropsType = {
  borderRadius: ScrollareaComponentBorderRadiusEnum;
  children: React.ReactNode;
  isHovered: boolean;
  contentRef: React.RefObject<HTMLDivElement>;
  setInitialScrollTop: Dispatch<SetStateAction<number>>;
  setInitialPointerY: Dispatch<SetStateAction<number>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  size: ScrollareaComponentSizeEnum;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
  variant: ScrollareaComponentVariantEnum;
};

export { ScrollareaTrackComponentPropsType };
