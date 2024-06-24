// Constants
import { MIN_THUMB_HEIGHT } from './constants/scrollarea-thumb.utils.constants';
// Types
import { GetContentScrollTopPropsType } from './types/get-content-scroll-top-by-event.props.type';
import { GetThumbHeightPropsType } from './types/get-thumb-height.props.type';
import { GetThumnTranslateYPropsType } from './types/get-thumb-translate-y.props.type';

const getContentScrollTop = ({
  clientY,
  contentRef,
  initialPointerY,
  initialScrollTop,
  thumbRef,
  trackRef,
}: GetContentScrollTopPropsType): number => {
  if (!contentRef.current || !thumbRef.current || !trackRef.current) {
    return 0;
  }
  const contentScrollHeight = contentRef.current.scrollHeight;
  const contentClientHeight = contentRef.current.clientHeight;
  const trackClientHeight = trackRef.current.clientHeight;

  const deltaY = clientY - initialPointerY;
  const scrollRatio = contentScrollHeight / trackClientHeight;
  const calculatedScrollTop = initialScrollTop + deltaY * scrollRatio;
  const scrollableContentHeight = contentScrollHeight - contentClientHeight;
  const contentScrollTop = Math.max(0, Math.min(calculatedScrollTop, scrollableContentHeight));

  return contentScrollTop;
};

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
  const scrollableTrackHeight = trackClientHeight - thumbClientHeight;
  const scrollRatio = contentScrollTop / scrollableContentHeight;
  const thumbTranslateY = scrollRatio * scrollableTrackHeight;

  return thumbTranslateY;
};

export { getContentScrollTop, getThumbHeight, getThumbTranslateY };
