// Enums
import {
  ScrollareaComponentGapEnum,
  ScrollareaComponentSizeEnum,
} from '../../enums/scrollarea.component.enums';
// Types
import { ScrollareaComponentStyledPropsType } from '../types/scrollarea.component.styled.props.type';

const getScrollareaGap = ({
  gap,
  theme,
}: Pick<ScrollareaComponentStyledPropsType, 'gap' | 'theme'>): string => {
  const gapsMap: Record<string, string> = {
    [ScrollareaComponentGapEnum.LARGE]: theme.spaces.space16,
    [ScrollareaComponentGapEnum.MEDIUM]: theme.spaces.space8,
    [ScrollareaComponentGapEnum.NONE]: theme.spaces.space0,
    [ScrollareaComponentGapEnum.SMALL]: theme.spaces.space4,
  };
  return gapsMap[gap];
};

const getTrackWidth = ({
  size,
  theme,
}: Pick<ScrollareaComponentStyledPropsType, 'size' | 'theme'>): string => {
  const widthsMap: Record<string, string> = {
    [ScrollareaComponentSizeEnum.SMALL]: theme.spaces.space8,
    [ScrollareaComponentSizeEnum.MEDIUM]: theme.spaces.space12,
    [ScrollareaComponentSizeEnum.LARGE]: theme.spaces.space16,
  };
  return widthsMap[size];
};

export { getScrollareaGap, getTrackWidth };
