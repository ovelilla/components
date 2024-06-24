// Types
import { GetContentScrollTopPropsType } from './types/get-content-scroll-top.props.type';

const getContentScrollTop = ({
  clientY,
  contentRef,
  thumbRef,
  trackRef,
}: GetContentScrollTopPropsType): number => {
  if (!contentRef.current || !thumbRef.current || !trackRef.current) {
    return 0;
  }
  const contentClientHeight = contentRef.current.clientHeight;
  const contentScrollHeight = contentRef.current.scrollHeight;
  const trackClientHeight = trackRef.current.clientHeight;
  const trackClientTop = trackRef.current.getBoundingClientRect().top;
  const thumbClientHeight = thumbRef.current.clientHeight;

  const thumbCenterPosition = clientY - trackClientTop - thumbClientHeight / 2;
  const scrollableTrackHeight = trackClientHeight - thumbClientHeight;
  const thumbPositionRatio = thumbCenterPosition / scrollableTrackHeight;
  const scrollableContentHeight = contentScrollHeight - contentClientHeight;
  const contentScrollTop = thumbPositionRatio * scrollableContentHeight;
  
  return contentScrollTop;
};

export { getContentScrollTop };
