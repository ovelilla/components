// Types
import { DialogHandlersPropsType } from './types/dialog.handlers.props.type';
import { DialogHandlersReturnType } from './types/dialog.handlers.return.type';
import { ResizeEventHandlerPropsType } from './types/resize-event-handler.props.type';
// Utils
import { getHasScroll } from '../utils/dialog.utils';

const checkScrollHandler = ({
  open,
  setHasHorizontalScroll,
  setHasVerticalScroll,
}: ResizeEventHandlerPropsType): void => {
  if (open) {
    const { hasHorizontalScroll, hasVerticalScroll } = getHasScroll();
    setHasHorizontalScroll(hasHorizontalScroll);
    setHasVerticalScroll(hasVerticalScroll);
  } else {
    setHasHorizontalScroll(false);
    setHasVerticalScroll(false);
  }
};

const DialogHandlers = ({
  open,
  setHasHorizontalScroll,
  setHasVerticalScroll,
}: DialogHandlersPropsType): DialogHandlersReturnType => {
  return {
    handleCheckScroll: () =>
      checkScrollHandler({ open, setHasHorizontalScroll, setHasVerticalScroll }),
  };
};

export { DialogHandlers };
