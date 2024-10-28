// Vendors
import { DefaultTheme } from 'styled-components';
// Enums
import {
  ScrollareaComponentGapEnum,
  ScrollareaComponentPositionEnum,
  ScrollareaComponentSizeEnum,
  ScrollareaComponentVariantEnum,
} from '../../enums/scrollarea.component.enums';

type ScrollareaComponentStyledPropsType = {
  gap: ScrollareaComponentGapEnum;
  hasScrollbar: boolean;
  position: ScrollareaComponentPositionEnum;
  size: ScrollareaComponentSizeEnum;
  theme: DefaultTheme;
  variant: ScrollareaComponentVariantEnum;
};

export { ScrollareaComponentStyledPropsType };
