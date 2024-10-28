// Vendors
import { DefaultTheme } from 'styled-components';
// Enums
import {
  TitleComponentFontSizeEnum,
  TitleComponentFontWeightEnum,
} from '../../enums/title.component.enums';

type TitleComponentStyledPropsType = {
  fontSize: TitleComponentFontSizeEnum;
  fontWeight: TitleComponentFontWeightEnum;
  theme: DefaultTheme;
};

export { TitleComponentStyledPropsType };
