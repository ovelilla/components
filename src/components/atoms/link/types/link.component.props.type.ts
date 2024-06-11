// Vendors
import React from 'react';
// Enumerations
import { LinkComponentSizesEnumeration } from '../enumerations/link.component.enumerations';

type LinkComponentPropsType = {
  bold?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: VoidFunction;
  size?: LinkComponentSizesEnumeration;
  underline?: boolean;
  uppercase?: boolean;
};

export { LinkComponentPropsType };
