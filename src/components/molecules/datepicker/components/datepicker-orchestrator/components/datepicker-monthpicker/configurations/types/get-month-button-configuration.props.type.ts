type GetMonthButtonConfigurationPropsType = {
  currentDate: Date;
  handleMonthButtonClick: (monthDate: Date) => void;
  monthDate: Date;
  monthRefs: React.MutableRefObject<React.RefObject<HTMLButtonElement>[]>;
};

export { GetMonthButtonConfigurationPropsType };
