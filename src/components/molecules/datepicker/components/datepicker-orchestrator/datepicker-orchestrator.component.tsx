// Components
import { DatepickerDaypickerComponent } from './components/datepicker-daypicker/datepicker-daypicker.component';
import { DatepickerMonthpickerComponent } from './components/datepicker-monthpicker/datepicker-monthpicker.component';
import { DatepickerYearpickerComponent } from './components/datepicker-yearpicker/datepicker-yearpicker.component';
// Types
import { DatepickerOrchestratorComponentPropsType } from './types/datepicker-orchestrator.component.props.type';

const DatepickerOrchestratorComponent = ({
  buttonShape,
  buttonSize,
  currentDate,
  locale,
  selectedDate,
  setCurrentDate,
  setSelectedDate,
  setShowMonthpicker,
  setShowYearpicker,
  showMonthpicker,
  showYearpicker,
  yearsRange,
}: DatepickerOrchestratorComponentPropsType): React.ReactElement<DatepickerOrchestratorComponentPropsType> => {
  if (showMonthpicker) {
    return (
      <DatepickerMonthpickerComponent
        {...{ currentDate, locale, setCurrentDate, setShowMonthpicker, showMonthpicker }}
      />
    );
  }
  if (showYearpicker) {
    return (
      <DatepickerYearpickerComponent
        {...{ currentDate, locale, setCurrentDate, setShowYearpicker, showYearpicker, yearsRange }}
      />
    );
  }
  return (
    <DatepickerDaypickerComponent
      {...{
        buttonShape,
        buttonSize,
        currentDate,
        locale,
        selectedDate,
        setCurrentDate,
        setSelectedDate,
      }}
    />
  );
};

export { DatepickerOrchestratorComponent };
