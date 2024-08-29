// Types
import { BottomLeftCornerPointerDownEventHandlerPropsType } from './types/bottom-left-corner-pointer-down-event-handler.props.type';
import { BottomRightCornerPointerDownEventHandlerPropsType } from './types/bottom-right-corner-pointer-down-event-handler.props.type';
import { BottomSidePointerDownEventHandlerPropsType } from './types/bottom-side-pointer-down-event-handler.props.type';
import { DialogResizeHandlersPropsType } from './types/dialog-resize.handlers.props.type';
import { DialogResizeHandlersReturnType } from './types/dialog-resize.handlers.return.type';
import { LeftSidePointerDownEventHandlerPropsType } from './types/left-side-pointer-down-event-handler.props.type';
import { RightSidePointerDownEventHandlerPropsType } from './types/right-side-pointer-down-event-handler.props.type';
import { TopLeftCornerPointerDownEventHandlerPropsType } from './types/top-left-corner-pointer-down-event-handler.props.type';
import { TopRightCornerPointerDownEventHandlerPropsType } from './types/top-right-corner-pointer-down-event-handler.props.type';
import { TopSidePointerDownEventHandlerPropsType } from './types/top-side-pointer-down-event-handler.props.type';

const bottomLeftCornerPointerDownEventHandler = ({
  disabled,
  event,
  minSize,
  setSize,
  setTranslate,
  size,
  translate,
}: BottomLeftCornerPointerDownEventHandlerPropsType): void => {
  event.stopPropagation();
  event.preventDefault();

  if (disabled) {
    return;
  }

  const initialX = event.clientX;
  const initialY = event.clientY;

  const initialHeight = size.height ?? 0;
  const initialWidth = size.width;

  const initialTranslateX = translate.x;

  const handlePointerMoveEvent = (event: MouseEvent) => {
    event.preventDefault();

    const deltaX = event.clientX - initialX;
    const deltaY = event.clientY - initialY;

    const newWidth = initialWidth - deltaX;
    const newHeight = initialHeight + deltaY;

    const finalWidth = newWidth < minSize.width ? minSize.width : newWidth;
    const finalHeight = newHeight < minSize.height ? minSize.height : newHeight;

    const newTranslateX = initialTranslateX + deltaX;

    const finalTranslateX =
      finalWidth === minSize.width
        ? initialTranslateX + (initialWidth - minSize.width)
        : newTranslateX;

    setTranslate((prevTranslate) => ({ ...prevTranslate, x: finalTranslateX }));
    setSize((prevSize) => ({ ...prevSize, width: finalWidth, height: finalHeight }));
  };

  const handlePointerUpEvent = (event: MouseEvent) => {
    event.stopPropagation();

    document.removeEventListener('pointermove', handlePointerMoveEvent);
    document.removeEventListener('pointerup', handlePointerUpEvent, true);
  };

  document.addEventListener('pointermove', handlePointerMoveEvent);
  document.addEventListener('pointerup', handlePointerUpEvent, true);
};

const bottomRightCornerPointerDownEventHandler = ({
  disabled,
  event,
  minSize,
  setSize,
  size,
}: BottomRightCornerPointerDownEventHandlerPropsType): void => {
  event.stopPropagation();
  event.stopPropagation();

  if (disabled) {
    return;
  }

  const initialX = event.clientX;
  const initialY = event.clientY;

  const initialHeight = size.height ?? 0;
  const initialWidth = size.width;

  const handlePointerMoveEvent = (event: MouseEvent) => {
    event.preventDefault();

    const deltaX = event.clientX - initialX;
    const deltaY = event.clientY - initialY;

    const newWidth = initialWidth + deltaX;
    const newHeight = initialHeight + deltaY;

    const finalWidth = newWidth < minSize.width ? minSize.width : newWidth;
    const finalHeight = newHeight < minSize.height ? minSize.height : newHeight;

    setSize((prevSize) => ({ ...prevSize, width: finalWidth, height: finalHeight }));
  };

  const handlePointerUpEvent = (event: MouseEvent) => {
    event.stopPropagation();

    document.removeEventListener('pointermove', handlePointerMoveEvent);
    document.removeEventListener('pointerup', handlePointerUpEvent, true);
  };

  document.addEventListener('pointermove', handlePointerMoveEvent);
  document.addEventListener('pointerup', handlePointerUpEvent, true);
};

const bottomSidePointerDownEventHandler = ({
  disabled,
  event,
  minSize,
  setSize,
  size,
}: BottomSidePointerDownEventHandlerPropsType): void => {
  event.preventDefault();
  event.stopPropagation();

  if (disabled) {
    return;
  }

  const initialY = event.clientY;
  const initialHeight = size.height ?? 0;

  const handlePointerMoveEvent = (event: MouseEvent) => {
    event.preventDefault();

    const newY = event.clientY - initialY;
    const newHeight = initialHeight + newY;
    const finalHeight = newHeight < minSize.height ? minSize.height : newHeight;

    setSize((prevSize) => ({ ...prevSize, height: finalHeight }));
  };

  const handlePointerUpEvent = (event: MouseEvent) => {
    event.stopPropagation();

    document.removeEventListener('pointermove', handlePointerMoveEvent);
    document.removeEventListener('pointerup', handlePointerUpEvent, true);
  };

  document.addEventListener('pointermove', handlePointerMoveEvent);
  document.addEventListener('pointerup', handlePointerUpEvent, true);
};

const leftSidePointerDownEventHandler = ({
  disabled,
  event,
  minSize,
  setSize,
  setTranslate,
  size,
  translate,
}: LeftSidePointerDownEventHandlerPropsType): void => {
  event.stopPropagation();
  event.preventDefault();

  if (disabled) {
    return;
  }

  const initialX = event.clientX;
  const initialWidth = size.width;
  const initialTranslateX = translate.x;

  const handlePointerMoveEvent = (event: MouseEvent) => {
    event.preventDefault();

    const deltaX = event.clientX - initialX;

    const newWidth = initialWidth - deltaX;
    const finalWidth = newWidth < minSize.width ? minSize.width : newWidth;

    const newTranslateX = initialTranslateX + deltaX;
    const finalTranslateX =
      finalWidth === minSize.width
        ? initialTranslateX + (initialWidth - minSize.width)
        : newTranslateX;

    setTranslate((prevTranslate) => ({ ...prevTranslate, x: finalTranslateX }));
    setSize((prevSize) => ({ ...prevSize, width: finalWidth }));
  };

  const handlePointerUpEvent = (event: MouseEvent) => {
    event.stopPropagation();

    document.removeEventListener('pointermove', handlePointerMoveEvent);
    document.removeEventListener('pointerup', handlePointerUpEvent, true);
  };

  document.addEventListener('pointermove', handlePointerMoveEvent);
  document.addEventListener('pointerup', handlePointerUpEvent, true);
};

const rightSidePointerDownEventHandler = ({
  disabled,
  event,
  minSize,
  setSize,
  size,
}: RightSidePointerDownEventHandlerPropsType): void => {
  event.stopPropagation();
  event.preventDefault();

  if (disabled) {
    return;
  }

  const initialX = event.clientX;
  const initialWidth = size.width;

  const handlePointerMoveEvent = (event: MouseEvent) => {
    event.preventDefault();

    const deltaX = event.clientX - initialX;
    const newWidth = initialWidth + deltaX;
    const finalWidth = newWidth < minSize.width ? minSize.width : newWidth;

    setSize((prevSize) => ({ ...prevSize, width: finalWidth }));
  };

  const handlePointerUpEvent = (event: MouseEvent) => {
    event.stopPropagation();

    document.removeEventListener('pointermove', handlePointerMoveEvent);
    document.removeEventListener('pointerup', handlePointerUpEvent, true);
  };

  document.addEventListener('pointermove', handlePointerMoveEvent);
  document.addEventListener('pointerup', handlePointerUpEvent, true);
};

const topLeftCornerPointerDownEventHandler = ({
  disabled,
  event,
  minSize,
  setSize,
  setTranslate,
  size,
  translate,
}: TopLeftCornerPointerDownEventHandlerPropsType): void => {
  event.stopPropagation();
  event.preventDefault();

  if (disabled) {
    return;
  }

  const initialX = event.clientX;
  const initialY = event.clientY;

  const initialHeight = size.height ?? 0;
  const initialWidth = size.width;

  const initialTranslateX = translate.x;
  const initialTranslateY = translate.y;

  const handlePointerMoveEvent = (event: MouseEvent) => {
    event.preventDefault();

    const deltaX = event.clientX - initialX;
    const deltaY = event.clientY - initialY;

    const newHeight = initialHeight - deltaY;
    const newWidth = initialWidth - deltaX;

    const finalHeight = newHeight < minSize.height ? minSize.height : newHeight;
    const finalWidth = newWidth < minSize.width ? minSize.width : newWidth;

    const newTranslateX = initialTranslateX + deltaX;
    const newTranslateY = initialTranslateY + deltaY;

    const finalTranslateX =
      finalWidth === minSize.width
        ? initialTranslateX + (initialWidth - minSize.width)
        : newTranslateX;
    const finalTranslateY =
      finalHeight === minSize.height
        ? initialTranslateY + (initialHeight - minSize.height)
        : newTranslateY;

    setTranslate((prevTranslate) => ({ ...prevTranslate, x: finalTranslateX, y: finalTranslateY }));
    setSize((prevSize) => ({ ...prevSize, width: finalWidth, height: finalHeight }));
  };

  const handlePointerUpEvent = (event: MouseEvent) => {
    event.stopPropagation();

    document.removeEventListener('pointermove', handlePointerMoveEvent);
    document.removeEventListener('pointerup', handlePointerUpEvent, true);
  };

  document.addEventListener('pointermove', handlePointerMoveEvent);
  document.addEventListener('pointerup', handlePointerUpEvent, true);
};

const topRightCornerPointerDownEventHandler = ({
  disabled,
  event,
  minSize,
  setSize,
  setTranslate,
  size,
  translate,
}: TopRightCornerPointerDownEventHandlerPropsType): void => {
  event.stopPropagation();
  event.preventDefault();

  if (disabled) {
    return;
  }

  const initialX = event.clientX;
  const initialY = event.clientY;

  const initialHeight = size.height ?? 0;
  const initialWidth = size.width;

  const initialTranslateY = translate.y;

  const handlePointerMoveEvent = (event: MouseEvent) => {
    event.preventDefault();

    const deltaX = event.clientX - initialX;
    const deltaY = event.clientY - initialY;

    const newWidth = initialWidth + deltaX;
    const newHeight = initialHeight - deltaY;

    const finalWidth = newWidth < minSize.width ? minSize.width : newWidth;
    const finalHeight = newHeight < minSize.height ? minSize.height : newHeight;

    const newTranslateY = initialTranslateY + deltaY;

    const finalTranslateY =
      finalHeight === minSize.height
        ? initialTranslateY + (initialHeight - minSize.height)
        : newTranslateY;

    setTranslate((prevTranslate) => ({ ...prevTranslate, y: finalTranslateY }));
    setSize((prevSize) => ({ ...prevSize, width: finalWidth, height: finalHeight }));
  };

  const handlePointerUpEvent = (event: MouseEvent) => {
    event.stopPropagation();

    document.removeEventListener('pointermove', handlePointerMoveEvent);
    document.removeEventListener('pointerup', handlePointerUpEvent, true);
  };

  document.addEventListener('pointermove', handlePointerMoveEvent);
  document.addEventListener('pointerup', handlePointerUpEvent, true);
};

const topSidePointerDownEventHandler = ({
  disabled,
  event,
  minSize,
  setSize,
  setTranslate,
  size,
  translate,
}: TopSidePointerDownEventHandlerPropsType): void => {
  event.stopPropagation();
  event.preventDefault();

  if (disabled) {
    return;
  }

  const initialY = event.clientY;
  const initialHeight = size.height ?? 0;
  const initialTranslateY = translate.y;

  const handlePointerMoveEvent = (event: MouseEvent) => {
    event.preventDefault();

    const deltaY = event.clientY - initialY;
    const newHeight = initialHeight - deltaY;
    const finalHeight = newHeight < minSize.height ? minSize.height : newHeight;
    const newTranslateY = initialTranslateY + deltaY;
    const finalTranslateY =
      finalHeight === minSize.height
        ? initialTranslateY + (initialHeight - minSize.height)
        : newTranslateY;

    setTranslate((prevTranslate) => ({ ...prevTranslate, y: finalTranslateY }));
    setSize((prevSize) => ({ ...prevSize, height: finalHeight }));
  };

  const handlePointerUpEvent = (event: MouseEvent) => {
    event.stopPropagation();

    document.removeEventListener('pointermove', handlePointerMoveEvent);
    document.removeEventListener('pointerup', handlePointerUpEvent, true);
  };

  document.addEventListener('pointermove', handlePointerMoveEvent);
  document.addEventListener('pointerup', handlePointerUpEvent, true);
};

const DialogResizeHandlers = ({
  disabled,
  minSize,
  setSize,
  setTranslate,
  size,
  translate,
}: DialogResizeHandlersPropsType): DialogResizeHandlersReturnType => {
  return {
    handleBottomLeftCornerPointerDownEvent: (event) =>
      bottomLeftCornerPointerDownEventHandler({
        disabled,
        event,
        minSize,
        setSize,
        setTranslate,
        size,
        translate,
      }),
    handleBottomRightCornerPointerDownEvent: (event) =>
      bottomRightCornerPointerDownEventHandler({
        disabled,
        event,
        minSize,
        setSize,
        size,
      }),
    handleBottomSidePointerDownEvent: (event) =>
      bottomSidePointerDownEventHandler({
        disabled,
        event,
        minSize,
        setSize,
        size,
      }),
    handleLeftSidePointerDownEvent: (event) =>
      leftSidePointerDownEventHandler({
        disabled,
        event,
        minSize,
        setSize,
        setTranslate,
        size,
        translate,
      }),
    handleRightSidePointerDownEvent: (event) =>
      rightSidePointerDownEventHandler({
        disabled,
        event,
        minSize,
        setSize,
        size,
      }),
    handleTopLeftCornerPointerDownEvent: (event) =>
      topLeftCornerPointerDownEventHandler({
        disabled,
        event,
        minSize,
        setSize,
        setTranslate,
        size,
        translate,
      }),
    handleTopRightCornerPointerDownEvent: (event) =>
      topRightCornerPointerDownEventHandler({
        disabled,
        event,
        minSize,
        setSize,
        setTranslate,
        size,
        translate,
      }),
    handleTopSidePointerDownEvent: (event) =>
      topSidePointerDownEventHandler({
        disabled,
        event,
        minSize,
        setSize,
        setTranslate,
        size,
        translate,
      }),
  };
};

export { DialogResizeHandlers };
