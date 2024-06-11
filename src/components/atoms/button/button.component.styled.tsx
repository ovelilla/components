// Vendors
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
// Enumerations
import {
  ButtonComponentBorderRadiusEnumeration,
  ButtonComponentSizesEnumeration,
  ButtonComponentTypesEnumeration,
  ButtonComponentVariantsEnumeration,
} from './enumerations/button.component.enumerations';

type ButtonComponentPropsType = {
  borderRadius: ButtonComponentBorderRadiusEnumeration;
  buttonType: ButtonComponentTypesEnumeration;
  disabled?: boolean;
  loading?: boolean;
  size: ButtonComponentSizesEnumeration;
  theme: DefaultTheme;
  variant: ButtonComponentVariantsEnumeration;
};

const getBorder = ({
  theme,
  variant,
}: Pick<ButtonComponentPropsType, 'theme' | 'variant'>): string => {
  const colorsMap: Record<string, string> = {
    [ButtonComponentVariantsEnumeration.OUTLINE]: `(${theme.border.border1} solid hsl(${theme.colors.input})`,
  };
  return colorsMap[variant] || 'none';
};

const getBorderRadius = ({
  borderRadius,
  theme,
}: Pick<ButtonComponentPropsType, 'borderRadius' | 'theme'>): string => {
  const borderRadiusMap: Record<string, string> = {
    [ButtonComponentBorderRadiusEnumeration.FULL]: theme.borderRadius.borderRadiusFull,
    [ButtonComponentBorderRadiusEnumeration.NONE]: theme.borderRadius.borderRadius0,
    [ButtonComponentBorderRadiusEnumeration.ROUNDED]: theme.borderRadius.borderRadius8,
  };
  return borderRadiusMap[borderRadius];
};

const getButtonBackgroundColor = ({
  theme,
  variant,
}: Pick<ButtonComponentPropsType, 'theme' | 'variant'>): string => {
  const colorsMap: Record<string, string> = {
    [ButtonComponentVariantsEnumeration.DESTRUCTIVE]: theme.colors.destructive,
    [ButtonComponentVariantsEnumeration.GHOST]: theme.colors.transparent,
    [ButtonComponentVariantsEnumeration.OUTLINE]: theme.colors.background,
    [ButtonComponentVariantsEnumeration.PRIMARY]: theme.colors.primary,
    [ButtonComponentVariantsEnumeration.SECONDARY]: theme.colors.secondary,
  };
  return `hsl(${colorsMap[variant]})`;
};

const getButtonColor = ({
  theme,
  variant,
}: Pick<ButtonComponentPropsType, 'theme' | 'variant'>): string => {
  const colorsMap: Record<string, string> = {
    [ButtonComponentVariantsEnumeration.DESTRUCTIVE]: theme.colors.destructiveForeground,
    [ButtonComponentVariantsEnumeration.GHOST]: theme.colors.foreground,
    [ButtonComponentVariantsEnumeration.OUTLINE]: theme.colors.foreground,
    [ButtonComponentVariantsEnumeration.PRIMARY]: theme.colors.primaryForeground,
    [ButtonComponentVariantsEnumeration.SECONDARY]: theme.colors.secondaryForeground,
  };
  return `hsl(${colorsMap[variant]})`;
};

const getButtonHoverBackgroundColor = ({
  theme,
  variant,
}: Pick<ButtonComponentPropsType, 'theme' | 'variant'>): string => {
  const colorsMap: Record<string, string> = {
    [ButtonComponentVariantsEnumeration.DESTRUCTIVE]: `${theme.colors.destructive} / .9`,
    [ButtonComponentVariantsEnumeration.GHOST]: theme.colors.accent,
    [ButtonComponentVariantsEnumeration.OUTLINE]: theme.colors.accent,
    [ButtonComponentVariantsEnumeration.PRIMARY]: `${theme.colors.primary} / .9`,
    [ButtonComponentVariantsEnumeration.SECONDARY]: `${theme.colors.secondary} / .9`,
  };
  return `hsl(${colorsMap[variant]})`;
};

const getButtonHoverColor = ({
  theme,
  variant,
}: Pick<ButtonComponentPropsType, 'theme' | 'variant'>): string => {
  const colorsMap: Record<string, string> = {
    [ButtonComponentVariantsEnumeration.DESTRUCTIVE]: theme.colors.destructiveForeground,
    [ButtonComponentVariantsEnumeration.GHOST]: theme.colors.accentForeground,
    [ButtonComponentVariantsEnumeration.OUTLINE]: theme.colors.accentForeground,
    [ButtonComponentVariantsEnumeration.PRIMARY]: theme.colors.primaryForeground,
    [ButtonComponentVariantsEnumeration.SECONDARY]: theme.colors.secondaryForeground,
  };
  return `hsl(${colorsMap[variant]})`;
};

const getButtonFontSize = ({
  size,
  theme,
}: Pick<ButtonComponentPropsType, 'size' | 'theme'>): string => {
  const sizesMap: Record<string, string> = {
    [ButtonComponentSizesEnumeration.SMALL]: theme.fontSizes.fontSize14,
    [ButtonComponentSizesEnumeration.MEDIUM]: theme.fontSizes.fontSize16,
    [ButtonComponentSizesEnumeration.LARGE]: theme.fontSizes.fontSize18,
  };
  return sizesMap[size] || theme.fontSizes.fontSize16;
};

const getButtonHeight = ({
  size,
  theme,
}: Pick<ButtonComponentPropsType, 'size' | 'theme'>): string => {
  const sizesMap: Record<string, string> = {
    [ButtonComponentSizesEnumeration.SMALL]: theme.spaces.space32,
    [ButtonComponentSizesEnumeration.MEDIUM]: theme.spaces.space40,
    [ButtonComponentSizesEnumeration.LARGE]: theme.spaces.space48,
  };
  return sizesMap[size] || theme.spaces.space48;
};

const getButtonPadding = ({
  size,
  theme,
  buttonType,
}: Pick<ButtonComponentPropsType, 'size' | 'theme' | 'buttonType'>): string => {
  const sizesMap: Record<string, string> = {
    [ButtonComponentSizesEnumeration.SMALL]: theme.spaces.space12,
    [ButtonComponentSizesEnumeration.MEDIUM]: theme.spaces.space16,
    [ButtonComponentSizesEnumeration.LARGE]: theme.spaces.space24,
  };
  return buttonType === ButtonComponentTypesEnumeration.ICON ? '0' : sizesMap[size];
};

const getButtonWidth = ({
  size,
  theme,
  buttonType,
}: Pick<ButtonComponentPropsType, 'size' | 'theme' | 'buttonType'>): string => {
  const sizesMap: Record<string, string> = {
    [ButtonComponentSizesEnumeration.SMALL]: theme.spaces.space32,
    [ButtonComponentSizesEnumeration.MEDIUM]: theme.spaces.space40,
    [ButtonComponentSizesEnumeration.LARGE]: theme.spaces.space48,
  };
  return buttonType === ButtonComponentTypesEnumeration.ICON ? sizesMap[size] : 'auto';
};

const ButtonComponentStyled = styled('button').withConfig({
  shouldForwardProp: (prop) =>
    !['borderRadius', 'buttonType', 'loading', 'size', 'theme', 'variant'].includes(prop),
})<ButtonComponentPropsType>`
  align-items: center;
  background-color: ${({ theme, variant }) => getButtonBackgroundColor({ theme, variant })};
  border-radius: ${({ borderRadius, theme }) => getBorderRadius({ borderRadius, theme })};
  border: ${({ theme, variant }) => getBorder({ theme, variant })};
  color: ${({ theme, variant }) => getButtonColor({ theme, variant })};
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  font-size: ${({ size, theme }) => getButtonFontSize({ size, theme })};
  font-weight: 500;
  gap: ${({ theme }) => theme.spaces.space8};
  height: ${({ size, theme }) => getButtonHeight({ size, theme })};
  justify-content: center;
  padding: 0 ${({ size, theme, buttonType }) => getButtonPadding({ size, theme, buttonType })};
  white-space: nowrap;
  width: ${({ size, theme, buttonType }) => getButtonWidth({ size, theme, buttonType })};

  &:hover {
    background-color: ${({ theme, variant }) => getButtonHoverBackgroundColor({ theme, variant })};
    color: ${({ theme, variant }) => getButtonHoverColor({ theme, variant })};
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export { ButtonComponentStyled };
