// Types
import { ScrollareaHandlersPropsType } from './types/scrollarea.handlers.props.type';
import { ScrollareaHandlersReturnType } from './types/scrollarea.handlers.return.type';
import { MouseEnterEventHandlerPropsType } from './types/mouse-enter-event-handler.props.type';
import { MouseLeaveEventHandlerPropsType } from './types/mouse-leave-event-handler.props.type';

const mouseEnterEventHandler = ({ setIsHovered }: MouseEnterEventHandlerPropsType): void => {
  setIsHovered(true);
};

const mouseLeaveEventHandler = ({ setIsHovered }: MouseLeaveEventHandlerPropsType): void => {
  setIsHovered(false);
};

const ScrollareaHandlers = ({
  setIsHovered,
}: ScrollareaHandlersPropsType): ScrollareaHandlersReturnType => {
  return {
    handleMouseEnterEvent: () => mouseEnterEventHandler({ setIsHovered }),
    handleMouseLeaveEvent: () => mouseLeaveEventHandler({ setIsHovered }),
  };
};

export { ScrollareaHandlers };
