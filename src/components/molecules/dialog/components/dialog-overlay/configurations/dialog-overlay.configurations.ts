// Constants
import { ANIMATION_PROPS } from './constants/dialog-overlay.configurations.constants';
// Types
import { GetOverlayConfigurationPropsType } from './types/get-overlay-configuration.props.type';
import { GetOverlayConfigurationReturnType } from './types/get-overlay-configuration.return.type';

const getOverlayConfiguration = ({
  animationDuration,
  hasAnimation,
}: GetOverlayConfigurationPropsType): GetOverlayConfigurationReturnType | null => {
  if (!hasAnimation) {
    return null;
  }
  return {
    ...ANIMATION_PROPS,
    transition: {
      duration: animationDuration / 1000,
    },
  };
};

export { getOverlayConfiguration };
