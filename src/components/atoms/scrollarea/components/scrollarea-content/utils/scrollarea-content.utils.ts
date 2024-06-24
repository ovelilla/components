// Types
import { GetThumnTranslateYPropsType } from './types/get-thumb-translate-y.props.type';

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

export { getThumbTranslateY };
