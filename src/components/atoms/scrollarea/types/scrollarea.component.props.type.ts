// Enums
import {
  ScrollareaComponentBorderRadiusEnum,
  ScrollareaComponentGapEnum,
  ScrollareaComponentSizeEnum,
  ScrollareaComponentVariantEnum,
} from '../enums/scrollarea.component.enums';

type ScrollareaComponentPropsType = {
  borderRadius?: ScrollareaComponentBorderRadiusEnum;
  children: React.ReactNode;
  gap?: ScrollareaComponentGapEnum;
  size?: ScrollareaComponentSizeEnum;
  variant?: ScrollareaComponentVariantEnum;
};

export { ScrollareaComponentPropsType };
