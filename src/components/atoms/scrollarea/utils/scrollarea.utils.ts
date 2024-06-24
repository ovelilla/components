// Constants
import { MIN_THUMB_HEIGHT } from './constants/scrollarea.utils.constants';
// Types
import { GetThumbHeightPropsType } from './types/get-thumb-height.props.type';

const getThumbHeight = ({ contentRef, trackRef }: GetThumbHeightPropsType): number => {
  if (!contentRef.current || !trackRef.current) {
    return 0;
  }
  const contentScrollHeight = contentRef.current.scrollHeight;
  const contentClientHeight = contentRef.current.clientHeight;
  const trackClientHeight = trackRef.current.clientHeight;
  const thumbClientHeight = (contentClientHeight / contentScrollHeight) * trackClientHeight;

  return thumbClientHeight < MIN_THUMB_HEIGHT ? MIN_THUMB_HEIGHT : thumbClientHeight;
};

export { getThumbHeight };
