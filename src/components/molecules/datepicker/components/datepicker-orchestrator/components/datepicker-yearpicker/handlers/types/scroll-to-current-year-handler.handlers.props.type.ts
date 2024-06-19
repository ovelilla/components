type ScrollToCurrentYearHandlerPropsType = {
  currentDate: Date;
  yearRefs: React.MutableRefObject<React.RefObject<HTMLButtonElement>[]>;
  yearsRange: {
    end: number;
    start: number;
  };
};

export { ScrollToCurrentYearHandlerPropsType };
