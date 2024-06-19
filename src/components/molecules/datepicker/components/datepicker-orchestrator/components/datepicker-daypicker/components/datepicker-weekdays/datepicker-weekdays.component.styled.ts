// Vendors
import styled from 'styled-components';

const DatepickerWeekdaysComponentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const DatepickerWeekdaysComponentDayStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  color: hsl(${({ theme }) => theme.colors.foreground});
`;

export { DatepickerWeekdaysComponentStyled, DatepickerWeekdaysComponentDayStyled };
