// Vendors
import React from 'react';
// Styles
import { ParagraphComponentStyled } from './paragraph.component.styled';
// Types
import { ParagraphComponentPropsType } from './types/paragraph.component.props.type';

const ParagraphComponent = ({
  children,
}: ParagraphComponentPropsType): React.ReactElement<ParagraphComponentPropsType> => {
  return <ParagraphComponentStyled>{children}</ParagraphComponentStyled>;
};

export { ParagraphComponent };
