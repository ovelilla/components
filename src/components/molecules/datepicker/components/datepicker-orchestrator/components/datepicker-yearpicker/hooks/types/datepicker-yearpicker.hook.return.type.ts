type DatepickerYearHookReturnType = {
  handleYearButtonClick: (yearDate: Date) => void;
  yearDates: Date[];
  yearRefs: React.MutableRefObject<React.RefObject<HTMLButtonElement>[]>;
};

export { DatepickerYearHookReturnType };
