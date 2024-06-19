// Components
import { DatepickerHeaderComponent } from './components/datepicker-header/datepicker-header.component';
import { DatepickerOrchestratorComponent } from './components/datepicker-orchestrator/datepicker-orchestrator.component';
// Constants
import { DEFAULT_LOCALE_CODE, DEFAULT_YEARS } from './constants/datepicker.component.constants';
// Enums
import {
  ButtonComponentShapeEnum,
  ButtonComponentSizeEnum,
} from 'components/atoms/button/enums/button.component.enums';
import {
  DatepickerComponentBorderEnum,
  DatepickerComponentBorderRadiusEnum,
  DatepickerComponentBoxShadowEnum,
} from './enums/datepicker.component.enumerations';
// Hooks
import { DatepickerHook } from './hooks/datepicker.hook';
// Styles
import { DatepickerComponentStyled } from './datepicker.component.styled';
// Types
import { DatepickerComponentPropsType } from './types/datepicker.component.props.type';

const DatepickerComponent = ({
  border = DatepickerComponentBorderEnum.SOLID,
  borderRadius = DatepickerComponentBorderRadiusEnum.MEDIUM,
  boxShadow = DatepickerComponentBoxShadowEnum.NONE,
  buttonShape = ButtonComponentShapeEnum.RECTANGLE,
  buttonSize = ButtonComponentSizeEnum.MEDIUM,
  localeCode = DEFAULT_LOCALE_CODE,
  value,
  yearsRange = DEFAULT_YEARS,
}: DatepickerComponentPropsType): React.ReactElement<DatepickerComponentPropsType> => {
  const {
    currentDate,
    datepickerRef,
    locale,
    selectedDate,
    setCurrentDate,
    setSelectedDate,
    setShowMonthpicker,
    setShowYearpicker,
    showMonthpicker,
    showYearpicker,
  } = DatepickerHook({
    localeCode,
    value,
  });
  return (
    <DatepickerComponentStyled
      {...{ ref: datepickerRef, border, borderRadius, boxShadow, datepickerRef }}>
      <DatepickerHeaderComponent
        {...{
          currentDate,
          locale,
          setCurrentDate,
          setShowMonthpicker,
          setShowYearpicker,
          showMonthpicker,
          showYearpicker,
        }}
      />
      <DatepickerOrchestratorComponent
        {...{
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
        }}
      />
    </DatepickerComponentStyled>
  );
};

export { DatepickerComponent };
