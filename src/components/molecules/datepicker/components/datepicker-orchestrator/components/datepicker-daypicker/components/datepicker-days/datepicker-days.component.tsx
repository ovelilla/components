// Components
import { DatepickerDayComponent } from './components/datepicker-day/datepicker-day.component';
// Hooks
import { DatepickerDaysHook } from './hooks/datepicker-days.hook';
// Styles
import { DatepickerDaysComponentStyled } from './datepicker-days.component.styled';
// Types
import { DatepickerDaysComponentPropsType } from './types/datepicker-days.component.props.type';

const DatepickerDaysComponent = ({
  buttonShape,
  buttonSize,
  currentDate,
  locale,
  selectedDate,
  setCurrentDate,
  setSelectedDate,
}: DatepickerDaysComponentPropsType): React.ReactElement<DatepickerDaysComponentPropsType> => {
  const { dates } = DatepickerDaysHook({
    currentDate,
    locale,
  });

  return (
    <DatepickerDaysComponentStyled>
      {dates.map((date, index) => (
        <DatepickerDayComponent
          key={index}
          {...{
            buttonShape,
            buttonSize,
            currentDate,
            date,
            locale,
            selectedDate,
            setCurrentDate,
            setSelectedDate,
          }}
        />
      ))}
    </DatepickerDaysComponentStyled>
  );
};

export { DatepickerDaysComponent };
