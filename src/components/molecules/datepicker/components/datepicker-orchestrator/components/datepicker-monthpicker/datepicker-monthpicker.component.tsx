// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
import { ListComponent } from 'components/atoms/list/list.component';
import { ListItemComponent } from 'components/atoms/list/components/list-item/list-item.component';
// Configurations
import { getMonthButtonConfiguration } from './configurations/datepicker-monthpicker.configurations';
// Hooks
import { DatepickerMonthpickerHook } from './hooks/datepicker-monthpicker.hook';
// Styles
import { DatepickerMonthpickerComponentStyled } from './datepicker-monthpicker.component.styled';
// Types
import { DatepickerMonthpickerComponentPropsType } from './types/datepicker-monthpicker.component.props.type';
// Utils
import { getMonthString } from './utils/datepicker-monthpicker.utils';

const DatepickerMonthpickerComponent = ({
  currentDate,
  locale,
  setCurrentDate,
  setShowMonthpicker,
  showMonthpicker,
}: DatepickerMonthpickerComponentPropsType): React.ReactElement<DatepickerMonthpickerComponentPropsType> => {
  const { handleMonthButtonClick, monthDates, monthRefs } = DatepickerMonthpickerHook({
    currentDate,
    setCurrentDate,
    setShowMonthpicker,
    showMonthpicker,
  });

  return (
    <DatepickerMonthpickerComponentStyled>
      <ListComponent>
        {monthDates.map((monthDate, index) => (
          <ListItemComponent key={index}>
            <ButtonComponent
              {...getMonthButtonConfiguration({
                currentDate,
                handleMonthButtonClick,
                monthDate,
                monthRefs,
              })}>
              {getMonthString({ locale, monthDate })}
            </ButtonComponent>
          </ListItemComponent>
        ))}
      </ListComponent>
    </DatepickerMonthpickerComponentStyled>
  );
};

export { DatepickerMonthpickerComponent };
