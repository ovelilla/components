// Vendors
import { Dispatch, SetStateAction } from 'react';
// Enums
import {
  ScrollareaComponentBorderRadiusEnum,
  ScrollareaComponentPositionEnum,
  ScrollareaComponentSizeEnum,
  ScrollareaComponentVariantEnum,
} from 'components/atoms/scrollarea/enums/scrollarea.component.enums';

type ScrollareaTrackComponentPropsType = {
  borderRadius: ScrollareaComponentBorderRadiusEnum;
  children: React.ReactNode;
  isDragging: boolean;
  showScrollbar: boolean;
  contentRef: React.RefObject<HTMLDivElement>;
  position: ScrollareaComponentPositionEnum;
  setInitialScrollTop: Dispatch<SetStateAction<number>>;
  setInitialPointerY: Dispatch<SetStateAction<number>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  showTrack: boolean;
  size: ScrollareaComponentSizeEnum;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
  variant: ScrollareaComponentVariantEnum;
};

export { ScrollareaTrackComponentPropsType };
