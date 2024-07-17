// Vendors
import React from 'react';
// Configurations
import { getSlideAnimationConfiguration } from './configurations/dialog-slide-animation.configurations';
// Styles
import { DialogSlideAnimationComponentStyled } from './styles/dialog-slide-animation.component.styled';
// Types
import { DialogSlideAnimationComponentPropsType } from './types/dialog-slide-animation.component.props.type';

const DialogSlideAnimationComponent = ({
  animationDuration,
  children,
  hasAnimation,
}: DialogSlideAnimationComponentPropsType): React.ReactElement<DialogSlideAnimationComponentPropsType> => (
  <DialogSlideAnimationComponentStyled
    {...getSlideAnimationConfiguration({ animationDuration, hasAnimation })}>
    {children}
  </DialogSlideAnimationComponentStyled>
);

export { DialogSlideAnimationComponent };
