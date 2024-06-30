// Enums
import { LinkComponentSizesEnum } from '../../enums/link.component.enums';
// Types
import { LinkComponentPropsType } from '../types/link.component.styled.props.type';

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

export { getLinkFontSize };
