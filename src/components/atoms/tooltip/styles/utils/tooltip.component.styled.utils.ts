// Enums
import {
  TooltipComponentBorderRadiusEnum,
  TooltipComponentFontSizeEnum,
  TooltipComponentFontWeightEnum,
  TooltipComponentOpacityEnum,
  TooltipComponentPaddingEnum,
  TooltipComponentPlacementEnum,
  TooltipComponentSizeEnum,
} from '../../enums/tooltip.component.enums';
// Types
import { TooltipComponentStyledPropsType } from '../types/tooltip.component.styled.props.type';

const getArrowBorderColor = ({
  opacity,
  placement,
  theme,
}: Pick<TooltipComponentStyledPropsType, 'opacity' | 'placement' | 'theme'>): string => {
  const borderColorMap: Record<string, string> = {
    [TooltipComponentPlacementEnum.BOTTOM]: `transparent transparent hsl(${theme.colors.primary} / ${getTooltipOpacity({ opacity, theme })}) transparent`,
    [TooltipComponentPlacementEnum.LEFT]: `transparent transparent transparent hsl(${theme.colors.primary} / ${getTooltipOpacity({ opacity, theme })})`,
    [TooltipComponentPlacementEnum.RIGHT]: `transparent hsl(${theme.colors.primary} / ${getTooltipOpacity({ opacity, theme })}) transparent transparent`,
    [TooltipComponentPlacementEnum.TOP]: `hsl(${theme.colors.primary} / ${getTooltipOpacity({ opacity, theme })}) transparent transparent transparent`,
  };
  return borderColorMap[placement];
};

const getTooltipBorderRadius = ({
  borderRadius,
  theme,
}: Pick<TooltipComponentStyledPropsType, 'borderRadius' | 'theme'>): string => {
  const borderRadiusMap: Record<string, string> = {
    [TooltipComponentBorderRadiusEnum.FULL]: theme.borderRadius.borderRadiusFull,
    [TooltipComponentBorderRadiusEnum.LARGE]: theme.borderRadius.borderRadius16,
    [TooltipComponentBorderRadiusEnum.MEDIUM]: theme.borderRadius.borderRadius8,
    [TooltipComponentBorderRadiusEnum.NONE]: theme.borderRadius.borderRadius0,
    [TooltipComponentBorderRadiusEnum.SMALL]: theme.borderRadius.borderRadius4,
  };
  return borderRadiusMap[borderRadius];
};

const getTooltipFontSize = ({
  fontSize,
  theme,
}: Pick<TooltipComponentStyledPropsType, 'fontSize' | 'theme'>): string => {
  const fontSizesMap: Record<string, string> = {
    [TooltipComponentFontSizeEnum.LARGE]: theme.fontSizes.size18,
    [TooltipComponentFontSizeEnum.MEDIUM]: theme.fontSizes.size16,
    [TooltipComponentFontSizeEnum.SMALL]: theme.fontSizes.size14,
  };
  return fontSizesMap[fontSize];
};

const getTooltipFontWeight = ({
  fontWeight,
  theme,
}: Pick<TooltipComponentStyledPropsType, 'fontWeight' | 'theme'>): number => {
  const fontWeightsMap: Record<string, number> = {
    [TooltipComponentFontWeightEnum.BLACK]: theme.fontWeights.weight900,
    [TooltipComponentFontWeightEnum.BOLD]: theme.fontWeights.weight700,
    [TooltipComponentFontWeightEnum.EXTRABOLD]: theme.fontWeights.weight800,
    [TooltipComponentFontWeightEnum.EXTRALIGHT]: theme.fontWeights.weight200,
    [TooltipComponentFontWeightEnum.LIGHT]: theme.fontWeights.weight300,
    [TooltipComponentFontWeightEnum.MEDIUM]: theme.fontWeights.weight500,
    [TooltipComponentFontWeightEnum.NORMAL]: theme.fontWeights.weight400,
    [TooltipComponentFontWeightEnum.SEMIBOLD]: theme.fontWeights.weight600,
    [TooltipComponentFontWeightEnum.THIN]: theme.fontWeights.weight100,
  };
  return fontWeightsMap[fontWeight];
};

const getTooltipOpacity = ({
  opacity,
  theme,
}: Pick<TooltipComponentStyledPropsType, 'opacity' | 'theme'>): number => {
  const opacityMap: Record<string, number> = {
    [TooltipComponentOpacityEnum.LOW]: theme.opacities.opacity50,
    [TooltipComponentOpacityEnum.MEDIUM]: theme.opacities.opacity75,
    [TooltipComponentOpacityEnum.HIGH]: theme.opacities.opacity90,
    [TooltipComponentOpacityEnum.FULL]: theme.opacities.opacity100,
  };
  if (opacity) {
    return opacityMap[opacity];
  }
  return 1;
};

const getTooltipXPadding = ({
  padding,
  size,
  theme,
}: Pick<TooltipComponentStyledPropsType, 'padding' | 'size' | 'theme'>): string => {
  const sizesMap: Record<string, string> = {
    [TooltipComponentSizeEnum.LARGE]: theme.spaces.space12,
    [TooltipComponentSizeEnum.MEDIUM]: theme.spaces.space8,
    [TooltipComponentSizeEnum.SMALL]: theme.spaces.space4,
  };
  const paddingsMap: Record<string, string> = {
    [TooltipComponentPaddingEnum.LARGE]: theme.spaces.space12,
    [TooltipComponentPaddingEnum.MEDIUM]: theme.spaces.space8,
    [TooltipComponentPaddingEnum.SMALL]: theme.spaces.space4,
  };
  return padding ? paddingsMap[padding] : sizesMap[size];
};

const getTooltipYPadding = ({
  padding,
  size,
  theme,
}: Pick<TooltipComponentStyledPropsType, 'padding' | 'size' | 'theme'>): string => {
  const sizesMap: Record<string, string> = {
    [TooltipComponentSizeEnum.LARGE]: theme.spaces.space16,
    [TooltipComponentSizeEnum.MEDIUM]: theme.spaces.space12,
    [TooltipComponentSizeEnum.SMALL]: theme.spaces.space8,
  };
  const paddingsMap: Record<string, string> = {
    [TooltipComponentPaddingEnum.LARGE]: theme.spaces.space16,
    [TooltipComponentPaddingEnum.MEDIUM]: theme.spaces.space12,
    [TooltipComponentPaddingEnum.SMALL]: theme.spaces.space8,
  };
  return padding ? paddingsMap[padding] : sizesMap[size];
};

export {
  getArrowBorderColor,
  getTooltipBorderRadius,
  getTooltipFontSize,
  getTooltipFontWeight,
  getTooltipOpacity,
  getTooltipXPadding,
  getTooltipYPadding,
};
