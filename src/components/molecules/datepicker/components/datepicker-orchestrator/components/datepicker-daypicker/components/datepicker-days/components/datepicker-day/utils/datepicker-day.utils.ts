// Vendors
import { format, isSameDay, isSameMonth, isToday } from 'date-fns';
// Enums
import { DatepickerDayComponentStatesEnum } from '../enums/datepicker-day.component.enums';
// Types
import { GetDayUtilPropsType } from './types/get-day.util.props.type';
import { GetStateUtilPropsType } from './types/get-state.util.props.type';

const getDay = ({ date, locale }: GetDayUtilPropsType): string => format(date, 'd', { locale });

const getIsOutsideDay = ({
  date,
  currentDate,
}: Pick<GetStateUtilPropsType, 'date' | 'currentDate'>): boolean => !isSameMonth(date, currentDate);

const getIsOutsideAndSelectedDay = ({
  date,
  currentDate,
  selectedDate,
}: Pick<GetStateUtilPropsType, 'date' | 'currentDate' | 'selectedDate'>): boolean =>
  getIsOutsideDay({ date, currentDate }) && !!selectedDate && isSameDay(date, selectedDate);

const getIsOutsideAndTodaydDay = ({
  date,
  currentDate,
  selectedDate,
}: Pick<GetStateUtilPropsType, 'date' | 'currentDate' | 'selectedDate'>): boolean =>
  getIsOutsideDay({ date, currentDate }) &&
  isToday(date) &&
  (!selectedDate || !isSameDay(date, selectedDate));

const getIsSelectedDay = ({
  date,
  selectedDate,
}: Pick<GetStateUtilPropsType, 'date' | 'selectedDate'>): boolean =>
  !!selectedDate && isSameDay(date, selectedDate);

const getIsTodayDay = ({
  date,
  selectedDate,
}: Pick<GetStateUtilPropsType, 'date' | 'selectedDate'>): boolean =>
  isToday(date) && (!selectedDate || !isSameDay(date, selectedDate));

const getState = ({
  currentDate,
  date,
  selectedDate,
}: GetStateUtilPropsType): DatepickerDayComponentStatesEnum => {
  const stateConditions = [
    {
      condition: getIsOutsideAndSelectedDay({ date, currentDate, selectedDate }),
      state: DatepickerDayComponentStatesEnum.OUTSIDE_SELECTED,
    },
    {
      condition: getIsOutsideAndTodaydDay({ date, currentDate, selectedDate }),
      state: DatepickerDayComponentStatesEnum.OUTSIDE_TODAY,
    },
    {
      condition: getIsOutsideDay({ date, currentDate }),
      state: DatepickerDayComponentStatesEnum.OUTSIDE,
    },
    {
      condition: getIsSelectedDay({ date, selectedDate }),
      state: DatepickerDayComponentStatesEnum.SELECTED,
    },
    {
      condition: getIsTodayDay({ date, selectedDate }),
      state: DatepickerDayComponentStatesEnum.TODAY,
    },
  ];

  const state = stateConditions.find(({ condition }) => condition)?.state;

  return state ?? DatepickerDayComponentStatesEnum.DEFAULT;
};

export { getDay, getState };
