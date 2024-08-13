// Constants
import {
  ANIMATION_PROPS,
  DEFAULT_ACTIVE,
  DEFAULT_DURATION,
} from './constants/dialog-slide-animation.configurations.constants';
// Types
import { GetSlideAnimationConfigurationPropsType } from './types/get-slide-animation-configuration.props.type';
import { GetSlideAnimationConfigurationReturnType } from './types/get-slide-animation-configuration.return.type';

const getSlideAnimationConfiguration = ({
  active = DEFAULT_ACTIVE,
  duration = DEFAULT_DURATION,
}: GetSlideAnimationConfigurationPropsType): GetSlideAnimationConfigurationReturnType | null => {
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

export { getSlideAnimationConfiguration };
