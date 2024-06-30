// Vendors
import { DefaultTheme } from 'styled-components';
// Enums
import {
  ScrollareaComponentBorderRadiusEnum,
  ScrollareaComponentPositionEnum,
  ScrollareaComponentSizeEnum,
} from 'components/atoms/scrollarea/enums/scrollarea.component.enums';

type ScrollareaComponentTrackStyledPropsType = {
  borderRadius: ScrollareaComponentBorderRadiusEnum;
  position: ScrollareaComponentPositionEnum;
  showTrack: boolean;
  size: ScrollareaComponentSizeEnum;
  theme: DefaultTheme;
};

export { ScrollareaComponentTrackStyledPropsType };
