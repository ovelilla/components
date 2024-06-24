// Vendors
import React from 'react';
// Hooks
import { ScrollareaContentHook } from './hooks/scrollarea-content.hook';
// Styles
import { ScrollareaContentComponentStyled } from './styles/scrollarea-content.component.styled';
// Types
import { ScrollareaContentComponentPropsType } from './types/scrollarea-content.component.props.type';

const ScrollareaContentComponent = ({
  children,
  contentRef,
  setThumbTranslateY,
  thumbRef,
  trackRef,
}: ScrollareaContentComponentPropsType): React.ReactElement<ScrollareaContentComponentPropsType> => {
  const { handleScrollEvent } = ScrollareaContentHook({
    contentRef,
    setThumbTranslateY,
    thumbRef,
    trackRef,
  });
  return (
    <ScrollareaContentComponentStyled {...{ onScroll: handleScrollEvent, ref: contentRef }}>
      {children}
    </ScrollareaContentComponentStyled>
  );
};

export { ScrollareaContentComponent };
