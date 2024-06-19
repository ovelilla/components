// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
// Configurations
import { getButtonConfiguration } from './configurations/datepicker-day.configurations';
// Hooks
import { DatepickerDayHook } from './hooks/datepicker-day.hook';
// Styles
import { DatepickerDayComponentStyled } from './datepicker-day.component.styled';
// Types
import { DatepickerDayComponentPropsType } from './types/datepicker-day.component.props.type';

const DatepickerDayComponent = ({
  buttonShape,
  buttonSize,
  currentDate,
  date,
  locale,
  selectedDate,
  setCurrentDate,
  setSelectedDate,
}: DatepickerDayComponentPropsType): React.ReactElement<DatepickerDayComponentPropsType> => {
  const { day, handleSelectDate, state } = DatepickerDayHook({
    currentDate,
    date,
    locale,
    selectedDate,
    setCurrentDate,
    setSelectedDate,
  });

  return (
    <DatepickerDayComponentStyled>
      <ButtonComponent
        {...getButtonConfiguration({
          buttonShape,
          buttonSize,
          date,
          handleSelectDate,
          state,
        })}>
        {day}
      </ButtonComponent>
    </DatepickerDayComponentStyled>
  );
};

export { DatepickerDayComponent };
