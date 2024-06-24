// Enums
import {
  ScrollareaComponentGapEnum,
  ScrollareaComponentVariantEnum,
} from '../../enums/scrollarea.component.enums';
// Types
import { ScrollareaComponentStyledPropsType } from '../types/scrollarea.component.styled.props.type';

const getButtonGap = ({
  gap,
  theme,
  variant,
}: Pick<ScrollareaComponentStyledPropsType, 'gap' | 'theme' | 'variant'>): string => {
  if (variant === ScrollareaComponentVariantEnum.HIDDEN) {
    return theme.spaces.space0;
  }
  const gapsMap: Record<string, string> = {
    [ScrollareaComponentGapEnum.LARGE]: theme.spaces.space16,
    [ScrollareaComponentGapEnum.MEDIUM]: theme.spaces.space8,
    [ScrollareaComponentGapEnum.NONE]: theme.spaces.space0,
    [ScrollareaComponentGapEnum.SMALL]: theme.spaces.space4,
  };
  return gapsMap[gap];
};

export { getButtonGap };
