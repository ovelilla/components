// Vendors
import { DefaultTheme } from 'styled-components';
// Enums
import {
  ScrollareaComponentBorderRadiusEnum,
  ScrollareaComponentSizeEnum,
} from 'components/atoms/scrollarea/enums/scrollarea.component.enums';

type ScrollareaComponentTrackStyledPropsType = {
  borderRadius: ScrollareaComponentBorderRadiusEnum;
  size: ScrollareaComponentSizeEnum;
  theme: DefaultTheme;
};

export { ScrollareaComponentTrackStyledPropsType };
