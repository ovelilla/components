// Components
import { DatepickerMonthComponent } from './components/datepicker-month/datepicker-month.component';
import { DatepickerYearComponent } from './components/datepicker-year/datepicker-year.component';
// Styles
import {
  DatepickerHeaderComponentStyled,
  DatepickerHeaderComponenCenterStyled,
} from './datepicker-header.component.styled';
// Types
import { DatepickerHeaderComponentPropsType } from './types/datepicker-header.component.props.type';

const DatepickerHeaderComponent = ({
  currentDate,
  locale,
  setCurrentDate,
  setShowMonthpicker,
  setShowYearpicker,
  showMonthpicker,
  showYearpicker,
}: DatepickerHeaderComponentPropsType): React.ReactElement => (
  <DatepickerHeaderComponentStyled>
    <DatepickerMonthComponent
      {...{
        currentDate,
        locale,
        setCurrentDate,
        setShowMonthpicker,
        showMonthpicker,
        showYearpicker,
      }}
    />
    <DatepickerHeaderComponenCenterStyled />
    <DatepickerYearComponent
      {...{
        currentDate,
        locale,
        setCurrentDate,
        setShowYearpicker,
        showMonthpicker,
        showYearpicker,
      }}
    />
  </DatepickerHeaderComponentStyled>
);

export { DatepickerHeaderComponent };
