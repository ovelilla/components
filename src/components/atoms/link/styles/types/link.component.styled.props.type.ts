// Vendors
import { DefaultTheme } from 'styled-components';
// Enums
import { LinkComponentSizesEnum } from '../../enums/link.component.enums';

type LinkComponentPropsType = {
  bold: boolean;
  disabled?: boolean;
  size: LinkComponentSizesEnum;
  theme: DefaultTheme;
  underline: boolean;
  uppercase: boolean;
};

export { LinkComponentPropsType };
