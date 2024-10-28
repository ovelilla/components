// Vendors
import React from 'react';
// Components
import { DatepickerComponent } from 'components/molecules/datepicker/datepicker.component';
// Enums
import { ButtonComponentShapeEnum } from 'components/atoms/button/enums/button.component.enums';
// Styles
import { DatepickerPageStyled } from './datepicker.page.styled';

const DatepickerPage = (): React.ReactElement => {
  return (
    <DatepickerPageStyled>
      <DatepickerComponent {...{ localeCode: 'en-GB' }} />
      <DatepickerComponent {...{ buttonShape: ButtonComponentShapeEnum.CIRCLE }} />
      <DatepickerComponent {...{ buttonShape: ButtonComponentShapeEnum.SQUARE }} />
    </DatepickerPageStyled>
  );
};

export { DatepickerPage };
