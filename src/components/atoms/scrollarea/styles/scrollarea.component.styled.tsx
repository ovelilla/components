// Vendors
import styled from 'styled-components';
// Constants
import { EXCLUDED_PROPS } from './constants/scrollarea.component.styled.constants';
// Types
import { ScrollareaComponentStyledPropsType } from './types/scrollarea.component.styled.props.type';
// Utils
import { getButtonGap } from './utils/scrollarea.component.styled.utils';

const ScrollareaComponentStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string): boolean => !EXCLUDED_PROPS.includes(prop),
})<ScrollareaComponentStyledPropsType>`
  display: flex;
  gap: ${({ gap, theme, variant }) => getButtonGap({ gap, theme, variant })};
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export { ScrollareaComponentStyled };
