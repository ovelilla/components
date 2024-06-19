type GetYearButtonConfigurationPropsType = {
  currentDate: Date;
  handleYearButtonClick: (yearDate: Date) => void;
  yearDate: Date;
  yearsRange: {
    end: number;
    start: number;
  };
  yearRefs: React.MutableRefObject<React.RefObject<HTMLButtonElement>[]>;
};

export { GetYearButtonConfigurationPropsType };
