// Vendors
import ReactDOM from 'react-dom';
// Constants
import {
  DEFAULT_GAP,
  DEFAULT_HIDE_DELAY,
  // DEFAULT_SHOW_ARROW,
  DEFAULT_SHOW_DELAY,
} from './constants/tooltip.component.constants';
// Enums
import {
  TooltipComponentBorderRadiusEnum,
  TooltipComponentFontSizeEnum,
  TooltipComponentFontWeightEnum,
  TooltipComponentOpacityEnum,
  TooltipComponentPaddingEnum,
  TooltipComponentSizeEnum,
  TooltipComponentPlacementEnum,
} from './enums/tooltip.component.enums';
// Hooks
import { TooltipHook } from './hooks/tooltip.hook';
// Styles
import {
  TooltipComponentStyled,
  TooltipComponentContentStyled,
  TooltipComponentTitleStyled,
  TooltipComponentTriggerStyled,
} from './styles/tooltip.component.styled';
// Types
import { TooltipComponentPropsType } from './types/tooltip.component.props.type';

const TooltipComponent = ({
  borderRadius = TooltipComponentBorderRadiusEnum.MEDIUM,
  children,
  fontSize = TooltipComponentFontSizeEnum.MEDIUM,
  fontWeight = TooltipComponentFontWeightEnum.NORMAL,
  gap = DEFAULT_GAP,
  hideDelay = DEFAULT_HIDE_DELAY,
  opacity = TooltipComponentOpacityEnum.HIGH,
  padding = TooltipComponentPaddingEnum.MEDIUM,
  placement: initialPlacement = TooltipComponentPlacementEnum.TOP,
  // showArrow = DEFAULT_SHOW_ARROW,
  showDelay = DEFAULT_SHOW_DELAY,
  size = TooltipComponentSizeEnum.MEDIUM,
  title,
}: TooltipComponentPropsType): React.ReactElement<TooltipComponentPropsType> => {
  const {
    arrowPosition,
    contentRef,
    handleMouseEnterEvent,
    handleMouseLeaveEvent,
    placement,
    tooltipPosition,
    triggerRef,
    visible,
  } = TooltipHook({ gap, hideDelay, initialPlacement, showDelay });
  return (
    <TooltipComponentStyled>
      <TooltipComponentTriggerStyled
        {...{
          onMouseEnter: handleMouseEnterEvent,
          onMouseLeave: handleMouseLeaveEvent,
          ref: triggerRef,
        }}>
        {children}
      </TooltipComponentTriggerStyled>
      {visible &&
        ReactDOM.createPortal(
          <TooltipComponentContentStyled
            {...{
              arrowPosition,
              borderRadius,
              fontSize,
              fontWeight,
              gap,
              opacity,
              padding,
              placement,
              ref: contentRef,
              size,
              tooltipPosition,
            }}>
            <TooltipComponentTitleStyled>{title}</TooltipComponentTitleStyled>
          </TooltipComponentContentStyled>,
          document.body
        )}
    </TooltipComponentStyled>
  );
};

export { TooltipComponent };
