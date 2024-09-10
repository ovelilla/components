// Constants
import { MIN_THUMB_HEIGHT } from './constants/scrollarea.utils.constants';
// Types
import { GetThumbHeightPropsType } from './types/get-thumb-height.props.type';
import { GetThumnTranslateYPropsType } from './types/get-thumb-translate-y.props.type';

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

const getThumbTranslateY = ({
  contentRef,
  thumbRef,
  trackRef,
}: GetThumnTranslateYPropsType): number => {
  if (!contentRef.current || !thumbRef.current || !trackRef.current) {
    return 0;
  }
  const contentClientHeight = contentRef.current.clientHeight;
  const contentScrollHeight = contentRef.current.scrollHeight;
  const contentScrollTop = contentRef.current.scrollTop;
  const trackClientHeight = trackRef.current.clientHeight;
  const thumbClientHeight = thumbRef.current.clientHeight;

  const scrollableContentHeight = contentScrollHeight - contentClientHeight;

  if (scrollableContentHeight <= 0) {
    return 0;
  }

  const scrollableTrackHeight = Math.max(trackClientHeight - thumbClientHeight, 0);
  const scrollRatio = contentScrollTop / scrollableContentHeight;
  const thumbTranslateY = scrollRatio * scrollableTrackHeight;

  return thumbTranslateY;
};

export { getThumbHeight, getThumbTranslateY };
