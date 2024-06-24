// Vendors
import { DefaultTheme } from 'styled-components';
// Enums
import { ScrollareaComponentBorderRadiusEnum } from 'components/atoms/scrollarea/enums/scrollarea.component.enums';

type ScrollareaComponentThumbStyledPropsType = {
  borderRadius: ScrollareaComponentBorderRadiusEnum;
  theme: DefaultTheme;
  thumbHeight: number;
  thumbTranslateY: number;
};

export { ScrollareaComponentThumbStyledPropsType };
