// Vendors
import React, { forwardRef } from 'react';
// Enums
import {
  ButtonComponentAlignmentEnum,
  ButtonComponentBorderRadiusEnum,
  ButtonComponentFontSizeEnum,
  ButtonComponentFontWeightEnum,
  ButtonComponentGapEnum,
  ButtonComponentModeEnum,
  ButtonComponentShapeEnum,
  ButtonComponentSizeEnum,
  ButtonComponentVariantEnum,
} from './enums/button.component.enums';
// Styles
import { ButtonComponentStyled } from './styles/button.component.styled';
// Types
import { ButtonComponentPropsType } from './types/button.component.props.type';
// Utils
import { getStyledAs } from './utils/button.component.utils';

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonComponentPropsType>(
  (
    {
      alignment = ButtonComponentAlignmentEnum.CENTER,
      borderRadius = ButtonComponentBorderRadiusEnum.MEDIUM,
      children,
      disabled,
      fontWeight = ButtonComponentFontWeightEnum.NORMAL,
      fontSize = ButtonComponentFontSizeEnum.MEDIUM,
      fullWidth,
      gap = ButtonComponentGapEnum.MEDIUM,
      href,
      loading,
      mode = ButtonComponentModeEnum.BUTTON,
      onClick,
      opacity,
      padding,
      shape = ButtonComponentShapeEnum.RECTANGLE,
      size = ButtonComponentSizeEnum.MEDIUM,
      variant = ButtonComponentVariantEnum.PRIMARY,
      ...props
    }: ButtonComponentPropsType,
    ref
  ): React.ReactElement<ButtonComponentPropsType> => (
    <ButtonComponentStyled
      {...{
        alignment,
        as: getStyledAs({ mode }),
        borderRadius,
        disabled,
        fontSize,
        fontWeight,
        fullWidth,
        gap,
        loading,
        mode,
        onClick,
        opacity,
        padding,
        ref,
        shape,
        size,
        to: href,
        variant,
        ...props,
      }}>
      {children}
    </ButtonComponentStyled>
  )
);

export { ButtonComponent };
