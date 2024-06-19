// Vendors
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { Link } from 'react-router-dom';
// Enums
import { LinkComponentSizesEnum } from './enums/link.component.enums';

type LinkComponentPropsType = {
  bold: boolean;
  disabled?: boolean;
  size: LinkComponentSizesEnum;
  theme: DefaultTheme;
  underline: boolean;
  uppercase: boolean;
};

const getLinkFontSize = ({
  size,
  theme,
}: Pick<LinkComponentPropsType, 'size' | 'theme'>): string => {
  const sizesMap: Record<string, string> = {
    [LinkComponentSizesEnum.SMALL]: theme.fontSizes.size14,
    [LinkComponentSizesEnum.MEDIUM]: theme.fontSizes.size16,
    [LinkComponentSizesEnum.LARGE]: theme.fontSizes.size18,
    [LinkComponentSizesEnum.XLARGE]: theme.fontSizes.size20,
    [LinkComponentSizesEnum.XXLARGE]: theme.fontSizes.size24,
  };
  return sizesMap[size] || theme.sizes.size16;
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
