// Vendors
import React from 'react';
// Styles
import { ParagraphComponentStyled } from './styles/paragraph.component.styled';
// Types
import { ParagraphComponentPropsType } from './types/paragraph.component.props.type';

const ParagraphComponent = ({
  children,
}: ParagraphComponentPropsType): React.ReactElement<ParagraphComponentPropsType> => {
  return <ParagraphComponentStyled>{children}</ParagraphComponentStyled>;
};

export { ParagraphComponent };
