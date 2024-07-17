// Enums
import {
  DialogContentComponentBorderRadiusEnum,
  DialogContentComponentPaddingEnum,
} from '../enums/dialog-content.component.enums';

type DialogContentComponentPropsType = {
  borderRadius?: DialogContentComponentBorderRadiusEnum;
  children: React.ReactNode;
  isFullScreen: boolean;
  padding?: DialogContentComponentPaddingEnum;
};

export { DialogContentComponentPropsType };
