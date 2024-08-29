// Constants
import {
  DEFAULT_ACTIVE,
  DEFAULT_DURATION,
  DEFAULT_TYPE,
} from './constants/dialog-container.component.styled.utils.constants';
// Enums
import {
  DialogContainerComponentBorderRadiusEnum,
  DialogContainerComponentPaddingEnum,
} from '../../enums/dialog-container.component.enums';
// Types
import { DialogContainerComponentStyledPropsType } from '../types/dialog-container.component.styled.props.type';

const getAnimation = ({
  animation: { active = DEFAULT_ACTIVE, duration = DEFAULT_DURATION, type = DEFAULT_TYPE } = {},
}: Pick<DialogContainerComponentStyledPropsType, 'animation'>) => {
  if (!active) {
    return 'none';
  }
  return `${duration}ms ${type}`;
};

const getBorderRadius = ({
  borderRadius = DialogContainerComponentBorderRadiusEnum.MEDIUM,
  isFullscreen,
  theme,
}: Pick<
  DialogContainerComponentStyledPropsType,
  'borderRadius' | 'isFullscreen' | 'theme'
>): string => {
  const borderRadiusMap: Record<string, string> = {
    [DialogContainerComponentBorderRadiusEnum.LARGE]: theme.borderRadius.borderRadius16,
    [DialogContainerComponentBorderRadiusEnum.MEDIUM]: theme.borderRadius.borderRadius8,
    [DialogContainerComponentBorderRadiusEnum.NONE]: theme.borderRadius.borderRadius0,
    [DialogContainerComponentBorderRadiusEnum.SMALL]: theme.borderRadius.borderRadius4,
  };
  return isFullscreen ? theme.borderRadius.borderRadius0 : borderRadiusMap[borderRadius];
};

const getPadding = ({
  padding = DialogContainerComponentPaddingEnum.NONE,
  theme,
}: Pick<DialogContainerComponentStyledPropsType, 'padding' | 'theme'>): string => {
  const paddingsMap: Record<string, string> = {
    [DialogContainerComponentPaddingEnum.LARGE]: theme.spaces.space24,
    [DialogContainerComponentPaddingEnum.MEDIUM]: theme.spaces.space16,
    [DialogContainerComponentPaddingEnum.NONE]: theme.spaces.space0,
    [DialogContainerComponentPaddingEnum.SMALL]: theme.spaces.space12,
  };
  return paddingsMap[padding];
};

export { getAnimation, getBorderRadius, getPadding };
