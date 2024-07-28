// Types
import { GetInitialIsFullscreenUtilPropsType } from './types/get-initial-is-fullscreen.util.props.type';

const getInitailIsFullscreeen = ({
  initialIsFullscreen,
  isMobile,
}: GetInitialIsFullscreenUtilPropsType): boolean => {
  return isMobile ? true : initialIsFullscreen;
};

export { getInitailIsFullscreeen };
