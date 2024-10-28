// Vendors
import React from 'react';
// Components
import { TitleComponent } from 'components/atoms/title/title.component';
// Enums
import {
  TitleComponentFontSizeEnum,
  TitleComponentFontWeightEnum,
  TitleComponentTagEnum,
} from 'components/atoms/title/enums/title.component.enums';
// Styles
import { TitlePageStyled } from './title.page.styled';

const TitlePage = (): React.ReactElement => {
  return (
    <TitlePageStyled>
      <TitleComponent
        {...{
          fontSize: TitleComponentFontSizeEnum.MEDIUM,
          fontWeight: TitleComponentFontWeightEnum.NORMAL,
          tag: TitleComponentTagEnum.H6,
        }}>
        Lorem ipsum dolor sit amet
      </TitleComponent>
      <TitleComponent
        {...{
          fontSize: TitleComponentFontSizeEnum.LARGE,
          fontWeight: TitleComponentFontWeightEnum.NORMAL,
          tag: TitleComponentTagEnum.H5,
        }}>
        Lorem ipsum dolor sit amet
      </TitleComponent>
      <TitleComponent
        {...{
          fontSize: TitleComponentFontSizeEnum.XLARGE,
          fontWeight: TitleComponentFontWeightEnum.NORMAL,
          tag: TitleComponentTagEnum.H4,
        }}>
        Lorem ipsum dolor sit amet
      </TitleComponent>
      <TitleComponent
        {...{
          fontSize: TitleComponentFontSizeEnum.XXLARGE,
          fontWeight: TitleComponentFontWeightEnum.NORMAL,
          tag: TitleComponentTagEnum.H3,
        }}>
        Lorem ipsum dolor sit amet
      </TitleComponent>
      <TitleComponent
        {...{
          fontSize: TitleComponentFontSizeEnum.XXXLARGE,
          fontWeight: TitleComponentFontWeightEnum.NORMAL,
          tag: TitleComponentTagEnum.H2,
        }}>
        Lorem ipsum dolor sit amet
      </TitleComponent>
      <TitleComponent
        {...{
          fontSize: TitleComponentFontSizeEnum.XXXXLARGE,
          fontWeight: TitleComponentFontWeightEnum.NORMAL,
          tag: TitleComponentTagEnum.H1,
        }}>
        Lorem ipsum dolor sit amet
      </TitleComponent>
    </TitlePageStyled>
  );
};

export { TitlePage };
