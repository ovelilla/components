// Vendors
import React from 'react';
// Enums
import {
  TitleComponentFontSizeEnum,
  TitleComponentFontWeightEnum,
  TitleComponentTagEnum,
} from './enums/title.component.enums';
// Styles
import { TitleComponentStyled } from './styles/title.component.styled';
// Types
import { TitleComponentPropsType } from './types/title.component.props.type';

const TitleComponent = ({
  children,
  fontSize = TitleComponentFontSizeEnum.MEDIUM,
  fontWeight = TitleComponentFontWeightEnum.NORMAL,
  tag = TitleComponentTagEnum.H2,
}: TitleComponentPropsType): React.ReactElement<TitleComponentPropsType> => {
  return (
    <TitleComponentStyled
      {...{
        as: tag,
        fontSize,
        fontWeight,
      }}>
      {children}
    </TitleComponentStyled>
  );
};

export { TitleComponent };
