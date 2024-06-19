// Vendors
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
// Enums
import {
  DatepickerComponentBorderEnum,
  DatepickerComponentBorderRadiusEnum,
  DatepickerComponentBoxShadowEnum,
} from './enums/datepicker.component.enumerations';

type DatepickerComponentPropsType = {
  border: DatepickerComponentBorderEnum;
  borderRadius: DatepickerComponentBorderRadiusEnum;
  boxShadow: DatepickerComponentBoxShadowEnum;
  datepickerRef: React.RefObject<HTMLDivElement>;
  theme: DefaultTheme;
};

const getBorder = ({
  theme,
  border,
}: Pick<DatepickerComponentPropsType, 'theme' | 'border'>): string => {
  const colorsMap: Record<string, string> = {
    [DatepickerComponentBorderEnum.SOLID]: `${theme.borders.border1} solid hsl(${theme.colors.input})`,
  };
  return colorsMap[border] || 'none';
};

const getBorderRadius = ({
  borderRadius,
  theme,
}: Pick<DatepickerComponentPropsType, 'borderRadius' | 'theme'>): string => {
  const borderRadiusMap: Record<string, string> = {
    [DatepickerComponentBorderRadiusEnum.NONE]: theme.borderRadius.borderRadius0,
    [DatepickerComponentBorderRadiusEnum.SMALL]: theme.borderRadius.borderRadius4,
    [DatepickerComponentBorderRadiusEnum.MEDIUM]: theme.borderRadius.borderRadius8,
    [DatepickerComponentBorderRadiusEnum.LARGE]: theme.borderRadius.borderRadius12,
  };
  return borderRadiusMap[borderRadius];
};

const getBoxShadow = ({
  boxShadow,
  theme,
}: Pick<DatepickerComponentPropsType, 'boxShadow' | 'theme'>): string => {
  const boxShadowMap: Record<string, string> = {
    [DatepickerComponentBoxShadowEnum.NONE]: theme.shadows.shadowNone,
    [DatepickerComponentBoxShadowEnum.SMALL]: theme.shadows.shadowSm,
    [DatepickerComponentBoxShadowEnum.MEDIUM]: theme.shadows.shadowMd,
    [DatepickerComponentBoxShadowEnum.LARGE]: theme.shadows.shadowLg,
  };
  return boxShadowMap[boxShadow];
};

const isNotForwardedProp = (prop: string): boolean =>
  !['border', 'borderRadius', 'boxShadow', 'datepickerRef'].includes(prop);

const DatepickerComponentStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => isNotForwardedProp(prop),
})<DatepickerComponentPropsType>`
  border: ${({ border, theme }) => getBorder({ border, theme })};
  border-radius: ${({ borderRadius, theme }) => getBorderRadius({ borderRadius, theme })};
  box-shadow: ${({ boxShadow, theme }) => getBoxShadow({ boxShadow, theme })};
  display: flex;
  flex-direction: column;
  height: ${({ datepickerRef }) => datepickerRef.current?.offsetHeight}px;
  overflow: hidden;
`;

export { DatepickerComponentStyled };
