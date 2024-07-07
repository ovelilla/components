// Enums
import {
  DialogContentComponentBorderRadiusEnum,
  DialogContentComponentPaddingEnum,
} from '../../enums/dialog-content.component.enums';
// Types
import { DialogContentComponentStyledPropsType } from '../types/dialog-content.component.styled.props.type';

const getBorderRadius = ({
  borderRadius,
  theme,
}: Pick<DialogContentComponentStyledPropsType, 'borderRadius' | 'theme'>): string => {
  const borderRadiusMap: Record<string, string> = {
    [DialogContentComponentBorderRadiusEnum.LARGE]: theme.borderRadius.borderRadius16,
    [DialogContentComponentBorderRadiusEnum.MEDIUM]: theme.borderRadius.borderRadius8,
    [DialogContentComponentBorderRadiusEnum.NONE]: theme.borderRadius.borderRadius0,
    [DialogContentComponentBorderRadiusEnum.SMALL]: theme.borderRadius.borderRadius4,
  };
  return borderRadiusMap[borderRadius];
};

const getPadding = ({
  padding,
  theme,
}: Pick<DialogContentComponentStyledPropsType, 'padding' | 'theme'>): string => {
  const paddingsMap: Record<string, string> = {
    [DialogContentComponentPaddingEnum.LARGE]: theme.spaces.space24,
    [DialogContentComponentPaddingEnum.MEDIUM]: theme.spaces.space16,
    [DialogContentComponentPaddingEnum.NONE]: theme.spaces.space0,
    [DialogContentComponentPaddingEnum.SMALL]: theme.spaces.space12,
  };
  return paddingsMap[padding];
};

export { getBorderRadius, getPadding };
