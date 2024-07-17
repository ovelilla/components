// Constants
import { ANIMATION_PROPS } from './constants/dialog-slide-animation.configurations.constants';
// Types
import { GetSlideAnimationConfigurationPropsType } from './types/get-slide-animation-configuration.props.type';
import { GetSlideAnimationConfigurationReturnType } from './types/get-slide-animation-configuration.return.type';

const getSlideAnimationConfiguration = ({
  animationDuration,
  hasAnimation,
}: GetSlideAnimationConfigurationPropsType): GetSlideAnimationConfigurationReturnType | null => {
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

export { getSlideAnimationConfiguration };
