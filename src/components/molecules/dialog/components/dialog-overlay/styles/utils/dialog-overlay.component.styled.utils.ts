// Constants
import {
  DEFAULT_ACTIVE,
  DEFAULT_DURATION,
  DEFAULT_TYPE,
} from './constants/dialog-overlay.component.styled.utils.constants';
// Enums
import { DialogOverlayComponentOpacityEnum } from '../../enums/dialog-overlay.component.enums';
// Types
import { DialogOverlayComponentStyledPropsType } from '../types/dialog-overlay.component.styled.props.type';

const getAnimation = ({
  animation: { active = DEFAULT_ACTIVE, duration = DEFAULT_DURATION, type = DEFAULT_TYPE } = {},
}: Pick<DialogOverlayComponentStyledPropsType, 'animation'>) => {
  if (!active) {
    return 'none';
  }
  return `${duration}ms ${type} forwards`;
};

const getOpacity = ({
  opacity = DialogOverlayComponentOpacityEnum.MEDIUM,
  theme,
}: Pick<DialogOverlayComponentStyledPropsType, 'opacity' | 'theme'>): number => {
  const opacityMap: Record<string, number> = {
    [DialogOverlayComponentOpacityEnum.FULL]: theme.opacities.opacity100,
    [DialogOverlayComponentOpacityEnum.HIGH]: theme.opacities.opacity60,
    [DialogOverlayComponentOpacityEnum.LOW]: theme.opacities.opacity20,
    [DialogOverlayComponentOpacityEnum.MEDIUM]: theme.opacities.opacity40,
    [DialogOverlayComponentOpacityEnum.NONE]: theme.opacities.opacity0,
  };
  return opacityMap[opacity];
};

export { getAnimation, getOpacity };
