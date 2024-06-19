// Components
import { DatepickerActionsComponent } from './components/datepicker-actions/datepicker-actions.component';
import { DatepickerDaysComponent } from './components/datepicker-days/datepicker-days.component';
import { DatepickerWeekdaysComponent } from './components/datepicker-weekdays/datepicker-weekdays.component';
// Styles
import { DatepickerDaypickerComponentStyled } from './datepicker-daypicker.component.styled';
// Types
import { DatepickerDaypickerComponentPropsType } from './types/datepicker-daypicker.component.props.type';

const DatepickerDaypickerComponent = ({
  buttonShape,
  buttonSize,
  currentDate,
  locale,
  selectedDate,
  setCurrentDate,
  setSelectedDate,
}: DatepickerDaypickerComponentPropsType): React.ReactElement<DatepickerDaypickerComponentPropsType> => {
  return (
    <DatepickerDaypickerComponentStyled>
      <DatepickerWeekdaysComponent {...{ locale }} />
      <DatepickerDaysComponent
        {...{
          buttonSize,
          currentDate,
          buttonShape,
          locale,
          selectedDate,
          setCurrentDate,
          setSelectedDate,
        }}
      />
      <DatepickerActionsComponent />
    </DatepickerDaypickerComponentStyled>
  );
};

export { DatepickerDaypickerComponent };
