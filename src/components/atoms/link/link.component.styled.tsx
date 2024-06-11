// Vendors
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { Link } from 'react-router-dom';
// Enumerations
import { LinkComponentSizesEnumeration } from './enumerations/link.component.enumerations';

type LinkComponentPropsType = {
  bold: boolean;
  disabled?: boolean;
  size: LinkComponentSizesEnumeration;
  theme: DefaultTheme;
  underline: boolean;
  uppercase: boolean;
};

const getLinkFontSize = ({
  size,
  theme,
}: Pick<LinkComponentPropsType, 'size' | 'theme'>): string => {
  const sizesMap: Record<string, string> = {
    [LinkComponentSizesEnumeration.SMALL]: theme.fontSizes.fontSize14,
    [LinkComponentSizesEnumeration.MEDIUM]: theme.fontSizes.fontSize16,
    [LinkComponentSizesEnumeration.LARGE]: theme.fontSizes.fontSize18,
    [LinkComponentSizesEnumeration.XLARGE]: theme.fontSizes.fontSize20,
    [LinkComponentSizesEnumeration.XXLARGE]: theme.fontSizes.fontSize24,
  };
  return sizesMap[size] || theme.fontSizes.fontSize16;
};

const LinkComponentStyled = styled(Link).withConfig({
  shouldForwardProp: (prop) => !['bold', 'size', 'theme', 'underline', 'uppercase'].includes(prop),
})<LinkComponentPropsType>`
  align-items: center;
  color: hsl(${({ theme }) => theme.colors.primary});
  cursor: pointer;
  display: inline-flex;
  font-size: ${({ size, theme }) => getLinkFontSize({ size, theme })};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  gap: ${({ theme }) => theme.spaces.space8};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};

  &:hover {
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export { LinkComponentStyled };
