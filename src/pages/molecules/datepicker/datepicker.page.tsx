// Vendors
import React from 'react';
// Components
import { DatepickerComponent } from 'components/molecules/datepicker/datepicker.component';
// Enums
// import {
//   DatepickerComponentDayShapeEnum,
//   DatepickerComponentDaySizeEnum,
// } from 'components/molecules/datepicker/enums/datepicker.component.enumerations';
// Styles
import { DatepickerPageStyled } from './datepicker.page.styled';

const DatepickerPage = (): React.ReactElement => {
  return (
    <DatepickerPageStyled>
      <DatepickerComponent {...{ localeCode: 'en-GB' }} />
      {/* <DatepickerComponent {...{ daySize: DatepickerComponentDaySizeEnum.LARGE }} />
      <DatepickerComponent {...{ dayShape: DatepickerComponentDayShapeEnum.SQUARE, locale: es }} />
      <DatepickerComponent
        {...{
          dayShape: DatepickerComponentDayShapeEnum.CIRCLE,
          daySize: DatepickerComponentDaySizeEnum.SMALL,
        }}
      />
      <DatepickerComponent {...{ dayShape: DatepickerComponentDayShapeEnum.CIRCLE }} />
      <DatepickerComponent
        {...{
          dayShape: DatepickerComponentDayShapeEnum.CIRCLE,
          daySize: DatepickerComponentDaySizeEnum.LARGE,
        }}
      /> */}
    </DatepickerPageStyled>
  );
};

export { DatepickerPage };
