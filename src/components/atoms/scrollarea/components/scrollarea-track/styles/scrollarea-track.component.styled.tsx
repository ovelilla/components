// Vendors
import styled from 'styled-components';
// Constants
import { EXCLUDED_PROPS } from './constants/scrollarea-track.component.styled.constants';
// Types
import { ScrollareaComponentTrackStyledPropsType } from './types/scrollarea-track.component.styled.props.type';
// Utils
import { getBorderRadius, getButtonSize } from './utils/scrollarea-track.component.styled.utils';

const ScrollareaTrackComponentStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string): boolean => !EXCLUDED_PROPS.includes(prop),
})<ScrollareaComponentTrackStyledPropsType>`
  background-color: hsl(${({ theme }) => theme.colors.primaryForeground});
  border-radius: ${({ borderRadius, theme }) => getBorderRadius({ borderRadius, theme })};
  flex: 0 0 ${({ size, theme }) => getButtonSize({ size, theme })};
`;

export { ScrollareaTrackComponentStyled };
