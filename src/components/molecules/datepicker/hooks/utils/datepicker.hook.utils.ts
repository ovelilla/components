// Vendors
import { Locale, parseISO, startOfMonth } from 'date-fns';
// Constants
import { LOCALES_MAP } from './constants/datepicker.hook.utils.constants';
// Types
import { GetLocalePropsType } from './types/get-locale.util.props.type';
import { SetInitialCurrentDatePropsType } from './types/set-initial-current-date.util.props.type';
import { SetInitialSelectedDatePropsType } from './types/set-initial-selected-date.util.props.type';

const getLocale = ({ localeCode }: GetLocalePropsType): Locale =>
  LOCALES_MAP[localeCode] || LOCALES_MAP.enUS;

const setInitialCurrentDate = ({ value }: SetInitialCurrentDatePropsType): Date =>
  value ? startOfMonth(parseISO(value)) : startOfMonth(new Date());

const setInitialSelectedDate = ({ value }: SetInitialSelectedDatePropsType): Date | null =>
  value ? parseISO(value) : null;

export { getLocale, setInitialCurrentDate, setInitialSelectedDate };
