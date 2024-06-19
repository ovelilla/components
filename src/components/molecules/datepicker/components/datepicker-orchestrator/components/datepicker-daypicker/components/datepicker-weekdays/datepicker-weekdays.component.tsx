// Hooks
import { DatepickerWeekdaysHook } from './hooks/datepicker-weekdays.hook';
// Styles
import {
  DatepickerWeekdaysComponentStyled,
  DatepickerWeekdaysComponentDayStyled,
} from './datepicker-weekdays.component.styled';
// Types
import { DatepickerWeekdaysComponentPropsType } from './types/datepicker-weekdays.component.props.type';

const DatepickerWeekdaysComponent = ({
  locale,
}: DatepickerWeekdaysComponentPropsType): React.ReactElement<DatepickerWeekdaysComponentPropsType> => {
  const { weekdays } = DatepickerWeekdaysHook({ locale });

  return (
    <DatepickerWeekdaysComponentStyled>
      {weekdays.map((weekday, index) => (
        <DatepickerWeekdaysComponentDayStyled key={index}>
          {weekday}
        </DatepickerWeekdaysComponentDayStyled>
      ))}
    </DatepickerWeekdaysComponentStyled>
  );
};

export { DatepickerWeekdaysComponent };
