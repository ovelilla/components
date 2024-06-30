// Enums
import {
  ScrollareaComponentBorderRadiusEnum,
  ScrollareaComponentSizeEnum,
} from 'components/atoms/scrollarea/enums/scrollarea.component.enums';
// Types
import { ScrollareaComponentTrackStyledPropsType } from '../types/scrollarea-track.component.styled.props.type';

const getTrackBackgroundColor = ({
  showTrack,
  theme,
}: Pick<ScrollareaComponentTrackStyledPropsType, 'showTrack' | 'theme'>): string => {
  return showTrack ? theme.colors.primaryForeground : theme.colors.transparent;
};

const getTrackBorderRadius = ({
  borderRadius,
  theme,
}: Pick<ScrollareaComponentTrackStyledPropsType, 'borderRadius' | 'theme'>): string => {
  const borderRadiusMap: Record<string, string> = {
    [ScrollareaComponentBorderRadiusEnum.FULL]: theme.borderRadius.borderRadiusFull,
    [ScrollareaComponentBorderRadiusEnum.LARGE]: theme.borderRadius.borderRadius6,
    [ScrollareaComponentBorderRadiusEnum.MEDIUM]: theme.borderRadius.borderRadius4,
    [ScrollareaComponentBorderRadiusEnum.NONE]: theme.borderRadius.borderRadius0,
    [ScrollareaComponentBorderRadiusEnum.SMALL]: theme.borderRadius.borderRadius2,
  };
  return borderRadiusMap[borderRadius];
};

const getTrackWidth = ({
  size,
  theme,
}: Pick<ScrollareaComponentTrackStyledPropsType, 'size' | 'theme'>): string => {
  const widthsMap: Record<string, string> = {
    [ScrollareaComponentSizeEnum.SMALL]: theme.spaces.space8,
    [ScrollareaComponentSizeEnum.MEDIUM]: theme.spaces.space12,
    [ScrollareaComponentSizeEnum.LARGE]: theme.spaces.space16,
  };
  return widthsMap[size];
};

export { getTrackBackgroundColor, getTrackBorderRadius, getTrackWidth };
