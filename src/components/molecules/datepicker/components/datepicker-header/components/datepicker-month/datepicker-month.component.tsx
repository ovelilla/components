// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
// Configurations
import {
  getCurrentMonthButtonConfiguration,
  getNextButtonConfiguration,
  getPrevButtonConfiguration,
} from './configurations/datepicker-month.configurations';
// Hooks
import { DatepickerMonthHook } from './hooks/datepicker-month.hook';
// Icons
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
// Styles
import {
  DatepickerMonthComponentStyled,
  DatepickerMonthLeftStyled,
  DatepickerMonthCenterStyled,
  DatepickerMonthRightStyled,
} from './datepicker-month.component.styled';
// Types
import { DatepickerMonthComponentPropsType } from './types/datepicker-month.component.props.type';

const DatepickerMonthComponent = ({
  currentDate,
  locale,
  setCurrentDate,
  setShowMonthpicker,
  showMonthpicker,
  showYearpicker,
}: DatepickerMonthComponentPropsType): React.ReactElement => {
  const {
    handleNextMonthButtonClick,
    handlePrevMonthButtonClick,
    handleToggleMonthpickerButtonClick,
    isMobile,
    month,
  } = DatepickerMonthHook({
    currentDate,
    locale,
    setCurrentDate,
    setShowMonthpicker,
  });

  return (
    <DatepickerMonthComponentStyled>
      <DatepickerMonthLeftStyled>
        <ButtonComponent
          {...getPrevButtonConfiguration({
            handlePrevMonthButtonClick,
            showMonthpicker,
            showYearpicker,
          })}>
          <ChevronLeft size={isMobile ? 20 : 24} />
        </ButtonComponent>
      </DatepickerMonthLeftStyled>
      <DatepickerMonthCenterStyled>
        <ButtonComponent
          {...getCurrentMonthButtonConfiguration({
            handleToggleMonthpickerButtonClick,
            isMobile,
            showYearpicker,
          })}>
          {month}
          {showMonthpicker ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </ButtonComponent>
      </DatepickerMonthCenterStyled>
      <DatepickerMonthRightStyled>
        <ButtonComponent
          {...getNextButtonConfiguration({
            handleNextMonthButtonClick,
            showMonthpicker,
            showYearpicker,
          })}>
          <ChevronRight size={isMobile ? 20 : 24} />
        </ButtonComponent>
      </DatepickerMonthRightStyled>
    </DatepickerMonthComponentStyled>
  );
};
export { DatepickerMonthComponent };
