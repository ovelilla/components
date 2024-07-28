// Vendors
import { DefaultTheme } from 'styled-components';
// Enums
import {
  DialogContentComponentBorderRadiusEnum,
  DialogContentComponentPaddingEnum,
} from '../../enums/dialog-content.component.enums';

type DialogContentComponentStyledPropsType = {
  borderRadius: DialogContentComponentBorderRadiusEnum;
  isFullscreen: boolean;
  padding: DialogContentComponentPaddingEnum;
  theme: DefaultTheme;
};

export { DialogContentComponentStyledPropsType };
