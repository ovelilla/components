// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
// Configurations
import {
  getNextButtonConfiguration,
  getPrevButtonConfiguration,
  getCurrentYearButtonConfiguration,
} from './configurations/datepicker-year.configurations';
// Hooks
import { DatepickerYearHook } from './hooks/datepicker-year.hook';
// Icons
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
// Styles
import {
  DatepickerYearComponentStyled,
  DatepickerYearLeftStyled,
  DatepickerYearCenterStyled,
  DatepickerYearRightStyled,
} from './datepicker-year.component.styled';
// Types
import { DatepickerYearComponentPropsType } from './types/datepicker-year.component.props.type';

const DatepickerYearComponent = ({
  currentDate,
  locale,
  setCurrentDate,
  setShowYearpicker,
  showMonthpicker,
  showYearpicker,
}: DatepickerYearComponentPropsType): React.ReactElement => {
  const {
    handleNextYearButtonClick,
    handlePrevYearButtonClick,
    handleToggleYearpickerButtonClick,
    isMobile,
    year,
  } = DatepickerYearHook({
    currentDate,
    locale,
    setCurrentDate,
    setShowYearpicker,
  });

  return (
    <DatepickerYearComponentStyled>
      <DatepickerYearLeftStyled>
        <ButtonComponent
          {...getPrevButtonConfiguration({
            handlePrevYearButtonClick,
            showMonthpicker,
            showYearpicker,
          })}>
          <ChevronLeft size={isMobile ? 20 : 24} />
        </ButtonComponent>
      </DatepickerYearLeftStyled>
      <DatepickerYearCenterStyled>
        <ButtonComponent
          {...getCurrentYearButtonConfiguration({
            handleToggleYearpickerButtonClick,
            isMobile,
            showMonthpicker,
          })}>
          {year}
          {showYearpicker ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </ButtonComponent>
      </DatepickerYearCenterStyled>
      <DatepickerYearRightStyled>
        <ButtonComponent
          {...getNextButtonConfiguration({
            handleNextYearButtonClick,
            showMonthpicker,
            showYearpicker,
          })}>
          <ChevronRight size={isMobile ? 20 : 24} />
        </ButtonComponent>
      </DatepickerYearRightStyled>
    </DatepickerYearComponentStyled>
  );
};
export { DatepickerYearComponent };
