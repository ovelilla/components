// Vendors
import React from 'react';
// Enums
import { LinkComponentSizesEnum } from '../enums/link.component.enums';

type LinkComponentPropsType = {
  bold?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: VoidFunction;
  size?: LinkComponentSizesEnum;
  underline?: boolean;
  uppercase?: boolean;
};

export { LinkComponentPropsType };
