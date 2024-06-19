// Vendors
import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';
// Enums
import {
  ButtonComponentAlignmentEnum,
  ButtonComponentBorderRadiusEnum,
  ButtonComponentFontSizeEnum,
  ButtonComponentFontWeightEnum,
  ButtonComponentGapEnum,
  ButtonComponentModeEnum,
  ButtonComponentOpacityEnum,
  ButtonComponentPaddingEnum,
  ButtonComponentShapeEnum,
  ButtonComponentSizeEnum,
  ButtonComponentVariantEnum,
} from './enums/button.component.enums';

type ButtonComponentPropsType = {
  alignment: ButtonComponentAlignmentEnum;
  borderRadius: ButtonComponentBorderRadiusEnum;
  disabled?: boolean;
  fontSize: ButtonComponentFontSizeEnum;
  fontWeight: ButtonComponentFontWeightEnum;
  fullWidth?: boolean;
  gap: ButtonComponentGapEnum;
  loading?: boolean;
  mode: ButtonComponentModeEnum;
  opacity?: ButtonComponentOpacityEnum;
  padding?: ButtonComponentPaddingEnum;
  shape: ButtonComponentShapeEnum;
  size: ButtonComponentSizeEnum;
  theme: DefaultTheme;
  variant: ButtonComponentVariantEnum;
};

const getAlignment = ({ alignment }: Pick<ButtonComponentPropsType, 'alignment'>): string => {
  const alignmentsMap: Record<string, string> = {
    [ButtonComponentAlignmentEnum.CENTER]: 'center',
    [ButtonComponentAlignmentEnum.LEFT]: 'flex-start',
    [ButtonComponentAlignmentEnum.RIGHT]: 'flex-end',
  };
  return alignmentsMap[alignment];
};

const getBorder = ({
  theme,
  variant,
}: Pick<ButtonComponentPropsType, 'theme' | 'variant'>): string => {
  const colorsMap: Record<string, string> = {
    [ButtonComponentVariantEnum.OUTLINE]: `${theme.borders.border1} solid hsl(${theme.colors.input})`,
  };
  return colorsMap[variant] || 'none';
};

const getBorderRadius = ({
  borderRadius,
  shape,
  theme,
}: Pick<ButtonComponentPropsType, 'borderRadius' | 'shape' | 'theme'>): string => {
  if (shape === ButtonComponentShapeEnum.CIRCLE) {
    return theme.borderRadius.borderRadiusFull;
  }
  const borderRadiusMap: Record<string, string> = {
    [ButtonComponentBorderRadiusEnum.FULL]: theme.borderRadius.borderRadiusFull,
    [ButtonComponentBorderRadiusEnum.LARGE]: theme.borderRadius.borderRadius16,
    [ButtonComponentBorderRadiusEnum.MEDIUM]: theme.borderRadius.borderRadius8,
    [ButtonComponentBorderRadiusEnum.NONE]: theme.borderRadius.borderRadius0,
    [ButtonComponentBorderRadiusEnum.SMALL]: theme.borderRadius.borderRadius4,
  };
  return borderRadiusMap[borderRadius];
};

const getButtonBackgroundColor = ({
  theme,
  variant,
}: Pick<ButtonComponentPropsType, 'theme' | 'variant'>): string => {
  const colorsMap: Record<string, string> = {
    [ButtonComponentVariantEnum.DESTRUCTIVE]: theme.colors.destructive,
    [ButtonComponentVariantEnum.GHOST]: theme.colors.transparent,
    [ButtonComponentVariantEnum.OUTLINE]: theme.colors.background,
    [ButtonComponentVariantEnum.PRIMARY]: theme.colors.primary,
    [ButtonComponentVariantEnum.SECONDARY]: theme.colors.secondary,
  };
  return `hsl(${colorsMap[variant]})`;
};

const getButtonColor = ({
  theme,
  variant,
}: Pick<ButtonComponentPropsType, 'theme' | 'variant'>): string => {
  const colorsMap: Record<string, string> = {
    [ButtonComponentVariantEnum.DESTRUCTIVE]: theme.colors.destructiveForeground,
    [ButtonComponentVariantEnum.GHOST]: theme.colors.foreground,
    [ButtonComponentVariantEnum.OUTLINE]: theme.colors.foreground,
    [ButtonComponentVariantEnum.PRIMARY]: theme.colors.primaryForeground,
    [ButtonComponentVariantEnum.SECONDARY]: theme.colors.secondaryForeground,
  };
  return `hsl(${colorsMap[variant]})`;
};

const getButtonHoverBackgroundColor = ({
  theme,
  variant,
}: Pick<ButtonComponentPropsType, 'theme' | 'variant'>): string => {
  const colorsMap: Record<string, string> = {
    [ButtonComponentVariantEnum.DESTRUCTIVE]: `${theme.colors.destructive} / .9`,
    [ButtonComponentVariantEnum.GHOST]: theme.colors.accent,
    [ButtonComponentVariantEnum.OUTLINE]: theme.colors.accent,
    [ButtonComponentVariantEnum.PRIMARY]: `${theme.colors.primary} / .9`,
    [ButtonComponentVariantEnum.SECONDARY]: `${theme.colors.secondary} / .9`,
  };
  return `hsl(${colorsMap[variant]})`;
};

const getButtonHoverColor = ({
  theme,
  variant,
}: Pick<ButtonComponentPropsType, 'theme' | 'variant'>): string => {
  const colorsMap: Record<string, string> = {
    [ButtonComponentVariantEnum.DESTRUCTIVE]: theme.colors.destructiveForeground,
    [ButtonComponentVariantEnum.GHOST]: theme.colors.accentForeground,
    [ButtonComponentVariantEnum.OUTLINE]: theme.colors.accentForeground,
    [ButtonComponentVariantEnum.PRIMARY]: theme.colors.primaryForeground,
    [ButtonComponentVariantEnum.SECONDARY]: theme.colors.secondaryForeground,
  };
  return `hsl(${colorsMap[variant]})`;
};

const getButtonFontSize = ({
  fontSize,
  theme,
}: Pick<ButtonComponentPropsType, 'fontSize' | 'theme'>): string => {
  const fontSizesMap: Record<string, string> = {
    [ButtonComponentFontSizeEnum.LARGE]: theme.fontSizes.size18,
    [ButtonComponentFontSizeEnum.MEDIUM]: theme.fontSizes.size16,
    [ButtonComponentFontSizeEnum.SMALL]: theme.fontSizes.size14,
  };
  return fontSizesMap[fontSize];
};

const getButtonFontWeight = ({
  fontWeight,
  theme,
}: Pick<ButtonComponentPropsType, 'fontWeight' | 'theme'>): number => {
  const fontWeightsMap: Record<string, number> = {
    [ButtonComponentFontWeightEnum.BLACK]: theme.fontWeights.weight900,
    [ButtonComponentFontWeightEnum.BOLD]: theme.fontWeights.weight700,
    [ButtonComponentFontWeightEnum.EXTRABOLD]: theme.fontWeights.weight800,
    [ButtonComponentFontWeightEnum.EXTRALIGHT]: theme.fontWeights.weight200,
    [ButtonComponentFontWeightEnum.LIGHT]: theme.fontWeights.weight300,
    [ButtonComponentFontWeightEnum.MEDIUM]: theme.fontWeights.weight500,
    [ButtonComponentFontWeightEnum.NORMAL]: theme.fontWeights.weight400,
    [ButtonComponentFontWeightEnum.SEMIBOLD]: theme.fontWeights.weight600,
    [ButtonComponentFontWeightEnum.THIN]: theme.fontWeights.weight100,
  };
  return fontWeightsMap[fontWeight];
};

const getButtonGap = ({ gap, theme }: Pick<ButtonComponentPropsType, 'gap' | 'theme'>): string => {
  const gapsMap: Record<string, string> = {
    [ButtonComponentGapEnum.LARGE]: theme.spaces.space16,
    [ButtonComponentGapEnum.MEDIUM]: theme.spaces.space8,
    [ButtonComponentGapEnum.NONE]: theme.spaces.space0,
    [ButtonComponentGapEnum.SMALL]: theme.spaces.space4,
  };
  return gapsMap[gap];
};

const getButtonHeight = ({
  size,
  theme,
}: Pick<ButtonComponentPropsType, 'size' | 'theme'>): string => {
  const sizesMap: Record<string, string> = {
    [ButtonComponentSizeEnum.SMALL]: theme.spaces.space32,
    [ButtonComponentSizeEnum.MEDIUM]: theme.spaces.space40,
    [ButtonComponentSizeEnum.LARGE]: theme.spaces.space48,
  };
  return sizesMap[size] || theme.spaces.space48;
};

const getButtonOpacity = ({
  disabled,
  opacity,
  theme,
}: Pick<ButtonComponentPropsType, 'disabled' | 'opacity' | 'theme'>): number => {
  if (disabled) {
    return 0.5;
  }
  const opacityMap: Record<string, number> = {
    [ButtonComponentOpacityEnum.LOW]: theme.opacities.opacity25,
    [ButtonComponentOpacityEnum.MEDIUM]: theme.opacities.opacity50,
    [ButtonComponentOpacityEnum.HIGH]: theme.opacities.opacity75,
    [ButtonComponentOpacityEnum.FULL]: theme.opacities.opacity100,
  };
  if (opacity) {
    return opacityMap[opacity];
  }
  return 1;
};

const getButtonPadding = ({
  padding,
  shape,
  size,
  theme,
}: Pick<ButtonComponentPropsType, 'padding' | 'shape' | 'size' | 'theme'>): string => {
  if (shape === ButtonComponentShapeEnum.CIRCLE || shape === ButtonComponentShapeEnum.SQUARE) {
    return theme.spaces.space0;
  }
  const sizesMap: Record<string, string> = {
    [ButtonComponentSizeEnum.SMALL]: theme.spaces.space12,
    [ButtonComponentSizeEnum.MEDIUM]: theme.spaces.space16,
    [ButtonComponentSizeEnum.LARGE]: theme.spaces.space24,
  };
  const paddingsMap: Record<string, string> = {
    [ButtonComponentPaddingEnum.LARGE]: theme.spaces.space24,
    [ButtonComponentPaddingEnum.MEDIUM]: theme.spaces.space16,
    [ButtonComponentPaddingEnum.NONE]: theme.spaces.space0,
    [ButtonComponentPaddingEnum.SMALL]: theme.spaces.space12,
  };
  return padding ? paddingsMap[padding] : sizesMap[size];
};

const getButtonVisibility = ({
  variant,
  theme,
}: Pick<ButtonComponentPropsType, 'variant' | 'theme'>): string => {
  const visibilityMap: Record<string, string> = {
    [ButtonComponentVariantEnum.INVISIBLE]: theme.visibility.invisible,
  };
  return visibilityMap[variant] || 'visible';
};

const getButtonWidth = ({
  fullWidth,
  shape,
  size,
  theme,
}: Pick<ButtonComponentPropsType, 'fullWidth' | 'shape' | 'size' | 'theme'>): string => {
  const sizesMap: Record<string, string> = {
    [ButtonComponentSizeEnum.SMALL]: theme.spaces.space32,
    [ButtonComponentSizeEnum.MEDIUM]: theme.spaces.space40,
    [ButtonComponentSizeEnum.LARGE]: theme.spaces.space48,
  };

  if (shape === ButtonComponentShapeEnum.CIRCLE || shape === ButtonComponentShapeEnum.SQUARE) {
    return sizesMap[size];
  }

  return fullWidth ? theme.spaces.spaceFull : theme.spaces.spaceAuto;
};

const isNotForwardedProp = (prop: string): boolean =>
  ![
    'alignment',
    'borderRadius',
    'fontSize',
    'fontWeight',
    'fullWidth',
    'gap',
    'loading',
    'mode',
    'opacity',
    'padding',
    'shape',
    'size',
    'theme',
    'variant',
  ].includes(prop);

const ButtonComponentStyled = styled('button').withConfig({
  shouldForwardProp: (prop) => isNotForwardedProp(prop),
})<ButtonComponentPropsType>`
  ${({
    alignment,
    borderRadius,
    disabled,
    fontSize,
    fontWeight,
    fullWidth,
    gap,
    opacity,
    padding,
    shape,
    size,
    theme,
    variant,
  }) => css`
    align-items: center;
    background-color: ${getButtonBackgroundColor({ theme, variant })};
    border-radius: ${getBorderRadius({ borderRadius, shape, theme })};
    border: ${getBorder({ theme, variant })};
    color: ${getButtonColor({ theme, variant })};
    cursor: pointer;
    display: flex;
    flex-shrink: 0;
    font-size: ${getButtonFontSize({ fontSize, theme })};
    font-weight: ${getButtonFontWeight({ fontWeight, theme })};
    gap: ${getButtonGap({ gap, theme })};
    height: ${getButtonHeight({ size, theme })};
    justify-content: ${getAlignment({ alignment })};
    line-height: 1;
    opacity: ${getButtonOpacity({ disabled, opacity, theme })};
    padding: 0 ${getButtonPadding({ padding, shape, size, theme })};
    text-decoration: none;
    visibility: ${getButtonVisibility({ variant, theme })};
    white-space: nowrap;
    width: ${getButtonWidth({ fullWidth, shape, size, theme })};

    &:hover {
      background-color: ${getButtonHoverBackgroundColor({ theme, variant })};
      color: ${getButtonHoverColor({ theme, variant })};
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  `}
`;

export { ButtonComponentStyled };
