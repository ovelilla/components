// Enums
import { DialogOverlayComponentOpacityEnum } from '../../enums/dialog-overlay.component.enums';
// Types
import { DialogOverlayComponentStyledPropsType } from '../types/dialog-overlay.component.styled.props.type';

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

export { getOpacity };
