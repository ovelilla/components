// Vendors
import React from 'react';
// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
// Enums
import {
  ButtonComponentBorderRadiusEnum,
  ButtonComponentShapeEnum,
  ButtonComponentSizeEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';
// Styles
import { ButtonPageStyled, ButtonPageRowStyled } from './button.page.styled';

const ButtonPage = (): React.ReactElement => {
  return (
    <ButtonPageStyled>
      <ButtonPageRowStyled>
        <ButtonComponent
          {...{
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.DESTRUCTIVE,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{ size: ButtonComponentSizeEnum.SMALL, variant: ButtonComponentVariantEnum.GHOST }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.OUTLINE,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.PRIMARY,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.SECONDARY,
          }}>
          Button
        </ButtonComponent>
      </ButtonPageRowStyled>

      <ButtonPageRowStyled>
        <ButtonComponent {...{ variant: ButtonComponentVariantEnum.DESTRUCTIVE }}>
          Button
        </ButtonComponent>
        <ButtonComponent {...{ variant: ButtonComponentVariantEnum.GHOST }}>Button</ButtonComponent>
        <ButtonComponent {...{ variant: ButtonComponentVariantEnum.OUTLINE }}>
          Button
        </ButtonComponent>
        <ButtonComponent {...{ variant: ButtonComponentVariantEnum.PRIMARY }}>
          Button
        </ButtonComponent>
        <ButtonComponent {...{ variant: ButtonComponentVariantEnum.SECONDARY }}>
          Button
        </ButtonComponent>
      </ButtonPageRowStyled>

      <ButtonPageRowStyled>
        <ButtonComponent
          {...{
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.DESTRUCTIVE,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{ size: ButtonComponentSizeEnum.LARGE, variant: ButtonComponentVariantEnum.GHOST }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.OUTLINE,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.PRIMARY,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.SECONDARY,
          }}>
          Button
        </ButtonComponent>
      </ButtonPageRowStyled>

      <ButtonPageRowStyled>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.DESTRUCTIVE,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.GHOST,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.OUTLINE,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.PRIMARY,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.SECONDARY,
          }}>
          Button
        </ButtonComponent>
      </ButtonPageRowStyled>

      <ButtonPageRowStyled>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            variant: ButtonComponentVariantEnum.DESTRUCTIVE,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            variant: ButtonComponentVariantEnum.GHOST,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            variant: ButtonComponentVariantEnum.OUTLINE,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            variant: ButtonComponentVariantEnum.PRIMARY,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            variant: ButtonComponentVariantEnum.SECONDARY,
          }}>
          Button
        </ButtonComponent>
      </ButtonPageRowStyled>

      <ButtonPageRowStyled>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.DESTRUCTIVE,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.GHOST,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.OUTLINE,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.PRIMARY,
          }}>
          Button
        </ButtonComponent>
        <ButtonComponent
          {...{
            borderRadius: ButtonComponentBorderRadiusEnum.FULL,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.SECONDARY,
          }}>
          Button
        </ButtonComponent>
      </ButtonPageRowStyled>

      <ButtonPageRowStyled>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.DESTRUCTIVE,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.GHOST,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.OUTLINE,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.PRIMARY,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.SECONDARY,
          }}>
          B
        </ButtonComponent>
      </ButtonPageRowStyled>

      <ButtonPageRowStyled>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            variant: ButtonComponentVariantEnum.DESTRUCTIVE,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            variant: ButtonComponentVariantEnum.GHOST,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            variant: ButtonComponentVariantEnum.OUTLINE,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            variant: ButtonComponentVariantEnum.PRIMARY,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            variant: ButtonComponentVariantEnum.SECONDARY,
          }}>
          B
        </ButtonComponent>
      </ButtonPageRowStyled>

      <ButtonPageRowStyled>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.DESTRUCTIVE,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.GHOST,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.OUTLINE,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.PRIMARY,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.CIRCLE,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.SECONDARY,
          }}>
          B
        </ButtonComponent>
      </ButtonPageRowStyled>

      <ButtonPageRowStyled>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.DESTRUCTIVE,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.GHOST,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.OUTLINE,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.PRIMARY,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            size: ButtonComponentSizeEnum.SMALL,
            variant: ButtonComponentVariantEnum.SECONDARY,
          }}>
          B
        </ButtonComponent>
      </ButtonPageRowStyled>

      <ButtonPageRowStyled>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            variant: ButtonComponentVariantEnum.DESTRUCTIVE,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            variant: ButtonComponentVariantEnum.GHOST,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            variant: ButtonComponentVariantEnum.OUTLINE,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            variant: ButtonComponentVariantEnum.PRIMARY,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            variant: ButtonComponentVariantEnum.SECONDARY,
          }}>
          B
        </ButtonComponent>
      </ButtonPageRowStyled>

      <ButtonPageRowStyled>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.DESTRUCTIVE,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.GHOST,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.OUTLINE,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.PRIMARY,
          }}>
          B
        </ButtonComponent>
        <ButtonComponent
          {...{
            shape: ButtonComponentShapeEnum.SQUARE,
            size: ButtonComponentSizeEnum.LARGE,
            variant: ButtonComponentVariantEnum.SECONDARY,
          }}>
          B
        </ButtonComponent>
      </ButtonPageRowStyled>
    </ButtonPageStyled>
  );
};

export { ButtonPage };
