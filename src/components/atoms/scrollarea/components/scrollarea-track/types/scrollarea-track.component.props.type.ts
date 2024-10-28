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
  contentRef: React.RefObject<HTMLDivElement>;
  hasScrollbar: boolean;
  position: ScrollareaComponentPositionEnum;
  showScrollbar: boolean;
  showTrack: boolean;
  size: ScrollareaComponentSizeEnum;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
  variant: ScrollareaComponentVariantEnum;
};

export { ScrollareaTrackComponentPropsType };
