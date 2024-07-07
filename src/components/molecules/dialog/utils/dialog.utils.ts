// Types
import { GetHasScrollReturnType } from './types/get-has-scroll.return.type';

const getHasScroll = (): GetHasScrollReturnType => {
  const hasVerticalScroll = document.documentElement.scrollHeight > window.innerHeight;
  const hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth;
  return { hasVerticalScroll, hasHorizontalScroll };
};

export { getHasScroll };
