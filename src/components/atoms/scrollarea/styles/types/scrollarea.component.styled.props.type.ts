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
  position: ScrollareaComponentPositionEnum;
  size: ScrollareaComponentSizeEnum;
  theme: DefaultTheme;
  variant: ScrollareaComponentVariantEnum;
};

export { ScrollareaComponentStyledPropsType };
