// Vendors
import React from 'react';
// Constants
import {
  DEFAULT_BOLD,
  DEFAULT_HREF,
  DEFAULT_UNDERLINE,
  DEFAULT_UPPERCASE,
} from './constants/link.component.constants';
// Enums
import { LinkComponentSizesEnum } from './enums/link.component.enums';
// Styles
import { LinkComponentStyled } from './styles/link.component.styled';
// Types
import { LinkComponentPropsType } from './types/link.component.props.type';

const LinkComponent = ({
  bold = DEFAULT_BOLD,
  children,
  disabled,
  href = DEFAULT_HREF,
  onClick,
  size = LinkComponentSizesEnum.MEDIUM,
  underline = DEFAULT_UNDERLINE,
  uppercase = DEFAULT_UPPERCASE,
  ...props
}: LinkComponentPropsType): React.ReactElement<LinkComponentPropsType> => {
  return (
    <LinkComponentStyled
      {...{
        bold,
        children,
        disabled,
        to: href,
        onClick,
        size,
        underline,
        uppercase,
        ...props,
      }}>
      {children}
    </LinkComponentStyled>
  );
};

export { LinkComponent };
