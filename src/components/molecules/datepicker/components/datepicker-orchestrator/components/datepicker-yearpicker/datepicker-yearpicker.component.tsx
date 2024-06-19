// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
import { ListComponent } from 'components/atoms/list/list.component';
import { ListItemComponent } from 'components/atoms/list/components/list-item/list-item.component';
// Configurations
import { getYearButtonConfiguration } from './configurations/datepicker-yearpicker.configurations';
// Hooks
import { DatepickerYearpickerHook } from './hooks/datepicker-yearpicker.hook';
// Styles
import { DatepickerYearpickerComponentStyled } from './datepicker-yearpicker.component.styled';
// Types
import { DatepickerYearpickerComponentPropsType } from './types/datepicker-yearpicker.component.props.type';
// Utils
import { getYearString } from './utils/datepicker-yearpicker.utils';

const DatepickerYearpickerComponent = ({
  currentDate,
  locale,
  setCurrentDate,
  setShowYearpicker,
  showYearpicker,
  yearsRange,
}: DatepickerYearpickerComponentPropsType): React.ReactElement<DatepickerYearpickerComponentPropsType> => {
  const { handleYearButtonClick, yearDates, yearRefs } = DatepickerYearpickerHook({
    currentDate,
    setCurrentDate,
    setShowYearpicker,
    showYearpicker,
    yearsRange,
  });

  return (
    <DatepickerYearpickerComponentStyled>
      <ListComponent>
        {yearDates.map((yearDate, index) => (
          <ListItemComponent key={index}>
            <ButtonComponent
              {...getYearButtonConfiguration({
                currentDate,
                handleYearButtonClick,
                yearDate,
                yearsRange,
                yearRefs,
              })}>
              {getYearString({ locale, yearDate })}
            </ButtonComponent>
          </ListItemComponent>
        ))}
      </ListComponent>
    </DatepickerYearpickerComponentStyled>
  );
};

export { DatepickerYearpickerComponent };
