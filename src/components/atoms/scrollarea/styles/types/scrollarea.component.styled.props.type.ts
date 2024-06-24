// Vendors
import { DefaultTheme } from 'styled-components';
// Enums
import {
  ScrollareaComponentGapEnum,
  ScrollareaComponentVariantEnum,
} from '../../enums/scrollarea.component.enums';

type ScrollareaComponentStyledPropsType = {
  gap: ScrollareaComponentGapEnum;
  theme: DefaultTheme;
  variant: ScrollareaComponentVariantEnum;
};

export { ScrollareaComponentStyledPropsType };
