// Constants
import {
  DEFAULT_MIN_HEIGHT,
  DEFAULT_MIN_WIDTH,
  DEFAULT_WIDTH,
} from './constants/dialog-container.hook.utils.constants';

// Types
import { GetInitialIsFullscreenUtilPropsType } from './types/get-initial-is-fullscreen.util.props.type';
import { GetInitialMinSizeUtilPropsType } from './types/get-initial-min-size.util.props.type';
import { GetInitialPositionUtilPropsType } from './types/get-initial-position.util.props.type';
import { GetInitialSizeUtilPropsType } from './types/get-initial-size.util.props.type';

const getInitailIsFullscreen = ({
  initialIsFullscreen,
  isMobile,
}: GetInitialIsFullscreenUtilPropsType): boolean => {
  return isMobile ? true : initialIsFullscreen;
};

const getInitialMinSize = ({
  initialMinSize,
}: GetInitialMinSizeUtilPropsType): { width: number; height: number } => {
  return {
    width: initialMinSize?.width ?? DEFAULT_MIN_WIDTH,
    height: initialMinSize?.height ?? DEFAULT_MIN_HEIGHT,
  };
};

const getInitialPosition = ({
  containerRef,
  initialPosition,
}: GetInitialPositionUtilPropsType): { left: number; top: number } => {
  const { current } = containerRef;

  const left = current ? (window.innerWidth - current.offsetWidth) / 2 : 0;
  const top = current ? (window.innerHeight - current.offsetHeight) / 2 : 0;

  return {
    left: initialPosition?.left ?? left,
    top: initialPosition?.top ?? top,
  };
};

const getInitialSize = ({
  containerRef,
  initialSize,
}: GetInitialSizeUtilPropsType): { width: number; height: number | null } => {
  const { current } = containerRef;

  const height = current?.offsetHeight ?? null;
  const width = DEFAULT_WIDTH;

  return {
    height: initialSize?.height ?? height,
    width: initialSize?.width ?? width,
  };
};

export { getInitailIsFullscreen, getInitialMinSize, getInitialPosition, getInitialSize };
