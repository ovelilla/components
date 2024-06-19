// Vendors
import { Dispatch, SetStateAction } from 'react';
import { Locale } from 'date-fns';
// Enums
import {
  ButtonComponentShapeEnum,
  ButtonComponentSizeEnum,
} from 'components/atoms/button/enums/button.component.enums';

type DatepickerOrchestratorComponentPropsType = {
  currentDate: Date;
  buttonShape: ButtonComponentShapeEnum;
  buttonSize: ButtonComponentSizeEnum;
  locale: Locale;
  selectedDate: Date | null;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  setShowMonthpicker: Dispatch<SetStateAction<boolean>>;
  setShowYearpicker: Dispatch<SetStateAction<boolean>>;
  showMonthpicker: boolean;
  showYearpicker: boolean;
  yearsRange: {
    end: number;
    start: number;
  };
};

export { DatepickerOrchestratorComponentPropsType };
