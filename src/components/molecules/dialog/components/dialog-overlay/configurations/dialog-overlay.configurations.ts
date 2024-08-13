// Constants
import {
  ANIMATION_PROPS,
  DEFAULT_ACTIVE,
  DEFAULT_DURATION,
} from './constants/dialog-overlay.configurations.constants';
// Types
import { GetOverlayAnimationConfigurationPropsType } from './types/get-overlay-animation-configuration.props.type';
import { GetOverlayAnimationConfigurationReturnType } from './types/get-overlay-animation-configuration.return.type';

const getOverlayAnimationConfiguration = ({
  active = DEFAULT_ACTIVE,
  duration = DEFAULT_DURATION,
}: GetOverlayAnimationConfigurationPropsType): GetOverlayAnimationConfigurationReturnType | null => {
  if (!active) {
    return null;
  }
  return {
    ...ANIMATION_PROPS,
    transition: {
      duration: duration / 1000,
    },
  };
};

export { getOverlayAnimationConfiguration };
