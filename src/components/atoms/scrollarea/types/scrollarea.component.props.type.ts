// Enums
import {
  ScrollareaComponentBorderRadiusEnum,
  ScrollareaComponentGapEnum,
  ScrollareaComponentPositionEnum,
  ScrollareaComponentSizeEnum,
  ScrollareaComponentVariantEnum,
} from '../enums/scrollarea.component.enums';

type ScrollareaComponentPropsType = {
  borderRadius?: ScrollareaComponentBorderRadiusEnum;
  children: React.ReactNode;
  hideDelay?: number;
  gap?: ScrollareaComponentGapEnum;
  position?: ScrollareaComponentPositionEnum;
  showTrack?: boolean;
  size?: ScrollareaComponentSizeEnum;
  variant?: ScrollareaComponentVariantEnum;
};

export { ScrollareaComponentPropsType };
