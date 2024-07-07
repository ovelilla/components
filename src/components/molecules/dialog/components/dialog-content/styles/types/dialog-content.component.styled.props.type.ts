// Vendors
import { DefaultTheme } from 'styled-components';
// Enums
import {
  DialogContentComponentBorderRadiusEnum,
  DialogContentComponentPaddingEnum,
} from '../../enums/dialog-content.component.enums';

type DialogContentComponentStyledPropsType = {
  maxWidth: number;
  position: { x: number; y: number };
  translate: { x: number; y: number };
};

type DialogContentComponentAnimatedStyledPropsType = {
  borderRadius: DialogContentComponentBorderRadiusEnum;
  padding: DialogContentComponentPaddingEnum;
  theme: DefaultTheme;
};

export { DialogContentComponentStyledPropsType, DialogContentComponentAnimatedStyledPropsType };
