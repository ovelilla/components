// Enums
import { ScrollareaComponentBorderRadiusEnum } from 'components/atoms/scrollarea/enums/scrollarea.component.enums';
// Types
import { ScrollareaComponentThumbStyledPropsType } from '../types/scrollarea-thumb.component.styled.props.type';

const getBorderRadius = ({
  borderRadius,
  theme,
}: Pick<ScrollareaComponentThumbStyledPropsType, 'borderRadius' | 'theme'>): string => {
  const borderRadiusMap: Record<string, string> = {
    [ScrollareaComponentBorderRadiusEnum.FULL]: theme.borderRadius.borderRadiusFull,
    [ScrollareaComponentBorderRadiusEnum.LARGE]: theme.borderRadius.borderRadius6,
    [ScrollareaComponentBorderRadiusEnum.MEDIUM]: theme.borderRadius.borderRadius4,
    [ScrollareaComponentBorderRadiusEnum.NONE]: theme.borderRadius.borderRadius0,
    [ScrollareaComponentBorderRadiusEnum.SMALL]: theme.borderRadius.borderRadius2,
  };
  return borderRadiusMap[borderRadius];
};

export { getBorderRadius };
