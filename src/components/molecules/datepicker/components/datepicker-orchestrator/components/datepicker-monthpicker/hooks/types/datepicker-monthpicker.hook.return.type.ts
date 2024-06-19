export type DatepickerMonthHookReturnType = {
  handleMonthButtonClick: (monthDate: Date) => void;
  monthDates: Date[];
  monthRefs: React.MutableRefObject<React.RefObject<HTMLButtonElement>[]>;
};
