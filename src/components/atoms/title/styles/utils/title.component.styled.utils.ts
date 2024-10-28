// Enums
import {
  TitleComponentFontSizeEnum,
  TitleComponentFontWeightEnum,
} from '../../enums/title.component.enums';
// Types
import { TitleComponentStyledPropsType } from '../types/title.component.styled.props.type';

const getFontSize = ({
  fontSize,
  theme,
}: Pick<TitleComponentStyledPropsType, 'fontSize' | 'theme'>): string => {
  const fontSizesMap: Record<string, string> = {
    [TitleComponentFontSizeEnum.LARGE]: theme.fontSizes.size18,
    [TitleComponentFontSizeEnum.MEDIUM]: theme.fontSizes.size16,
    [TitleComponentFontSizeEnum.SMALL]: theme.fontSizes.size14,
    [TitleComponentFontSizeEnum.XLARGE]: theme.fontSizes.size20,
    [TitleComponentFontSizeEnum.XXLARGE]: theme.fontSizes.size24,
    [TitleComponentFontSizeEnum.XXXLARGE]: theme.fontSizes.size30,
    [TitleComponentFontSizeEnum.XXXXLARGE]: theme.fontSizes.size36,
  };
  return fontSizesMap[fontSize];
};

const getFontWeight = ({
  fontWeight,
  theme,
}: Pick<TitleComponentStyledPropsType, 'fontWeight' | 'theme'>): number => {
  const fontWeightsMap: Record<string, number> = {
    [TitleComponentFontWeightEnum.BLACK]: theme.fontWeights.weight900,
    [TitleComponentFontWeightEnum.BOLD]: theme.fontWeights.weight700,
    [TitleComponentFontWeightEnum.EXTRABOLD]: theme.fontWeights.weight800,
    [TitleComponentFontWeightEnum.EXTRALIGHT]: theme.fontWeights.weight200,
    [TitleComponentFontWeightEnum.LIGHT]: theme.fontWeights.weight300,
    [TitleComponentFontWeightEnum.MEDIUM]: theme.fontWeights.weight500,
    [TitleComponentFontWeightEnum.NORMAL]: theme.fontWeights.weight400,
    [TitleComponentFontWeightEnum.SEMIBOLD]: theme.fontWeights.weight600,
    [TitleComponentFontWeightEnum.THIN]: theme.fontWeights.weight100,
  };
  return fontWeightsMap[fontWeight];
};

export { getFontSize, getFontWeight };
