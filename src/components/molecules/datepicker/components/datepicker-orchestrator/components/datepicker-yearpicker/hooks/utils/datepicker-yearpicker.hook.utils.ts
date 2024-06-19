// Types
import { GetYearDatesPropsType } from './types/get-year-dates.util.props.type';
import { GetYearsLengthPropsType } from './types/get-years-length.util.props.type';

const getYearDates = ({ yearsRange }: GetYearDatesPropsType): Date[] =>
  Array.from(
    { length: getYearsLength({ yearsRange }) },
    (_, i) => new Date(yearsRange.start + i, 0)
  );

const getYearsLength = ({ yearsRange }: GetYearsLengthPropsType): number =>
  yearsRange.end - yearsRange.start + 1;

export { getYearDates };
