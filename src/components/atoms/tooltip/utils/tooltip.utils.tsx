// Enums
import { TooltipComponentPlacementEnum } from '../enums/tooltip.component.enums';
// Types
import { GetArrowPositionPropsType } from './types/get-arrow-position.props.type';
import { GetArrowPositionReturnType } from './types/get-arrow-position.return.type';
import { GetPlacementPropsType } from './types/get-placement.props.type';
import { GetTooltipPositionPropsType } from './types/get-tooltip-position.props.type';
import { GetTooltipPositionReturnType } from './types/get-tooltip-position.return.type';

const getArrowPosition = ({
  arrowSize,
  contentRef,
  placement,
  triggerRef,
}: GetArrowPositionPropsType): GetArrowPositionReturnType => {
  return {
    [TooltipComponentPlacementEnum.BOTTOM]: getArrowPositionBottom({
      arrowSize,
      contentRef,
      triggerRef,
    }),
    [TooltipComponentPlacementEnum.LEFT]: getArrowPositionLeft({
      arrowSize,
      contentRef,
      triggerRef,
    }),
    [TooltipComponentPlacementEnum.RIGHT]: getArrowPositionRight({
      arrowSize,
      contentRef,
      triggerRef,
    }),
    [TooltipComponentPlacementEnum.TOP]: getArrowPositionTop({ arrowSize, contentRef, triggerRef }),
  }[placement];
};

const getArrowPositionBottom = ({
  arrowSize,
  contentRef,
  triggerRef,
}: Omit<GetArrowPositionPropsType, 'placement'>): GetArrowPositionReturnType => {
  if (!contentRef.current || !triggerRef.current) {
    return { left: 0, top: 0 };
  }

  const contentRect = contentRef.current.getBoundingClientRect();
  const triggerRect = triggerRef.current.getBoundingClientRect();

  const contentLeft = contentRect.left;
  const triggerLeft = triggerRect.left;
  const triggerWidth = triggerRect.width;

  const arrowLeft = triggerLeft - contentLeft + (triggerWidth - arrowSize * 2) / 2;
  const arrowTop = -arrowSize * 2;

  return {
    left: arrowLeft,
    top: arrowTop,
  };
};

const getArrowPositionLeft = ({
  arrowSize,
  contentRef,
}: Omit<GetArrowPositionPropsType, 'placement'>): GetArrowPositionReturnType => {
  if (!contentRef.current) {
    return { left: 0, top: 0 };
  }

  const contentRect = contentRef.current.getBoundingClientRect();

  const contentHeight = contentRect.height;
  const contentWidth = contentRect.width;

  const arrowLeft = contentWidth;
  const arrowTop = (contentHeight - arrowSize * 2) / 2;

  return {
    left: arrowLeft,
    top: arrowTop,
  };
};

const getArrowPositionRight = ({
  arrowSize,
  contentRef,
}: Omit<GetArrowPositionPropsType, 'placement'>): GetArrowPositionReturnType => {
  if (!contentRef.current) {
    return { left: 0, top: 0 };
  }

  const contentRect = contentRef.current.getBoundingClientRect();

  const contentHeight = contentRect.height;

  const arrowLeft = -arrowSize * 2;
  const arrowTop = (contentHeight - arrowSize * 2) / 2;

  return {
    left: arrowLeft,
    top: arrowTop,
  };
};

const getArrowPositionTop = ({
  arrowSize,
  contentRef,
  triggerRef,
}: Omit<GetArrowPositionPropsType, 'placement'>): GetArrowPositionReturnType => {
  if (!contentRef.current || !triggerRef.current) {
    return { left: 0, top: 0 };
  }

  const contentRect = contentRef.current.getBoundingClientRect();
  const triggerRect = triggerRef.current.getBoundingClientRect();

  const contentHeight = contentRect.height;
  const contentLeft = contentRect.left;
  const triggerLeft = triggerRect.left;
  const triggerWidth = triggerRect.width;

  const arrowLeft = triggerLeft - contentLeft + (triggerWidth - arrowSize * 2) / 2;
  const arrowTop = contentHeight;

  return {
    left: arrowLeft,
    top: arrowTop,
  };
};

const getTooltipPosition = ({
  contentRef,
  gap,
  placement,
  triggerRef,
}: GetTooltipPositionPropsType): GetTooltipPositionReturnType => {
  return {
    [TooltipComponentPlacementEnum.BOTTOM]: getTooltipPositionBottom({
      contentRef,
      gap,
      placement,
      triggerRef,
    }),
    [TooltipComponentPlacementEnum.LEFT]: getTooltipPositionLeft({
      contentRef,
      gap,
      placement,
      triggerRef,
    }),
    [TooltipComponentPlacementEnum.RIGHT]: getTooltipPositionRight({
      contentRef,
      gap,
      placement,
      triggerRef,
    }),
    [TooltipComponentPlacementEnum.TOP]: getTooltipPositionTop({
      contentRef,
      gap,
      placement,
      triggerRef,
    }),
  }[placement];
};

const getTooltipPositionBottom = ({
  contentRef,
  gap,
  triggerRef,
}: GetTooltipPositionPropsType): GetTooltipPositionReturnType => {
  if (!contentRef.current || !triggerRef.current) {
    return { left: 0, top: 0 };
  }

  const contentRect = contentRef.current.getBoundingClientRect();
  const triggerRect = triggerRef.current.getBoundingClientRect();

  const contentWidth = contentRect.width;
  const triggerHeight = triggerRect.height;
  const triggerLeft = triggerRect.left;
  const triggerTop = triggerRect.top;
  const triggerWidth = triggerRect.width;

  const initialLeft = triggerLeft + (triggerWidth - contentWidth) / 2;
  const maxLeft = window.innerWidth - contentWidth - gap;
  const contentLeft = Math.min(maxLeft, Math.max(gap, initialLeft));
  const contentTop = triggerTop + triggerHeight + gap;

  return {
    left: contentLeft,
    top: contentTop,
  };
};

const getTooltipPositionLeft = ({
  contentRef,
  gap,
  triggerRef,
}: GetTooltipPositionPropsType): GetTooltipPositionReturnType => {
  if (!contentRef.current || !triggerRef.current) {
    return { left: 0, top: 0 };
  }

  const contentRect = contentRef.current.getBoundingClientRect();
  const triggerRect = triggerRef.current.getBoundingClientRect();

  const contentHeight = contentRect.height;
  const contentWidth = contentRect.width;
  const triggerHeigh = triggerRect.height;
  const triggerLeft = triggerRect.left;
  const triggerTop = triggerRect.top;

  const contentLeft = triggerLeft - contentWidth - gap;
  const contentTop = triggerTop + (triggerHeigh - contentHeight) / 2;

  return {
    left: contentLeft,
    top: contentTop,
  };
};

const getTooltipPositionRight = ({
  contentRef,
  gap,
  triggerRef,
}: GetTooltipPositionPropsType): GetTooltipPositionReturnType => {
  if (!contentRef.current || !triggerRef.current) {
    return { left: 0, top: 0 };
  }

  const contentRect = contentRef.current.getBoundingClientRect();
  const triggerRect = triggerRef.current.getBoundingClientRect();

  const contentHeight = contentRect.height;
  const triggerLeft = triggerRect.left;
  const triggerTop = triggerRect.top;
  const triggerWidth = triggerRect.width;

  const contentLeft = triggerLeft + triggerWidth + gap;
  const contentTop = triggerTop + (triggerWidth - contentHeight) / 2;

  return {
    left: contentLeft,
    top: contentTop,
  };
};

const getTooltipPositionTop = ({
  contentRef,
  gap,
  triggerRef,
}: GetTooltipPositionPropsType): GetTooltipPositionReturnType => {
  if (!contentRef.current || !triggerRef.current) {
    return { left: 0, top: 0 };
  }

  const contentRect = contentRef.current.getBoundingClientRect();
  const triggerRect = triggerRef.current.getBoundingClientRect();

  const contentHeight = contentRect.height;
  const contentWidth = contentRect.width;
  const triggerLeft = triggerRect.left;
  const triggerTop = triggerRect.top;
  const triggerWidth = triggerRect.width;

  const initialLeft = triggerLeft + (triggerWidth - contentWidth) / 2;
  const maxLeft = window.innerWidth - contentWidth - gap;
  const contentLeft = Math.min(maxLeft, Math.max(gap, initialLeft));
  const contentTop = triggerTop - contentHeight - gap;

  return {
    left: contentLeft,
    top: contentTop,
  };
};

const getTooltipPlacement = ({
  contentRef,
  gap,
  placement,
  triggerRef,
}: GetPlacementPropsType): TooltipComponentPlacementEnum => {
  return {
    [TooltipComponentPlacementEnum.BOTTOM]: getTooltipPlacementBottom({
      contentRef,
      gap,
      triggerRef,
    }),
    [TooltipComponentPlacementEnum.LEFT]: getTooltipPlacementLeft({ contentRef, gap, triggerRef }),
    [TooltipComponentPlacementEnum.RIGHT]: getTooltipPlacementRight({
      contentRef,
      gap,
      triggerRef,
    }),
    [TooltipComponentPlacementEnum.TOP]: getTooltipPlacementTop({ contentRef, gap, triggerRef }),
  }[placement];
};

const getTooltipPlacementBottom = ({
  contentRef,
  gap,
  triggerRef,
}: Omit<GetPlacementPropsType, 'placement'>): TooltipComponentPlacementEnum => {
  if (!contentRef.current || !triggerRef.current) {
    return TooltipComponentPlacementEnum.BOTTOM;
  }
  const contentRect = contentRef.current.getBoundingClientRect();
  const triggerRect = triggerRef.current.getBoundingClientRect();

  const contentHeight = contentRect.height;
  const triggerBottom = triggerRect.bottom;

  const contentBottom = triggerBottom + contentHeight + gap;

  return contentBottom <= window.innerHeight
    ? TooltipComponentPlacementEnum.BOTTOM
    : TooltipComponentPlacementEnum.TOP;
};

const getTooltipPlacementLeft = ({
  contentRef,
  gap,
  triggerRef,
}: Omit<GetPlacementPropsType, 'placement'>): TooltipComponentPlacementEnum => {
  if (!contentRef.current || !triggerRef.current) {
    return TooltipComponentPlacementEnum.LEFT;
  }

  const contentRect = contentRef.current.getBoundingClientRect();
  const triggerRect = triggerRef.current.getBoundingClientRect();

  const contentWidth = contentRect.width;
  const triggerLeft = triggerRect.left;

  const initialLeft = triggerLeft - contentWidth - gap;
  return initialLeft >= 0
    ? TooltipComponentPlacementEnum.LEFT
    : TooltipComponentPlacementEnum.RIGHT;
};

const getTooltipPlacementRight = ({
  contentRef,
  gap,
  triggerRef,
}: Omit<GetPlacementPropsType, 'placement'>): TooltipComponentPlacementEnum => {
  if (!contentRef.current || !triggerRef.current) {
    return TooltipComponentPlacementEnum.RIGHT;
  }

  const contentRect = contentRef.current.getBoundingClientRect();
  const triggerRect = triggerRef.current.getBoundingClientRect();

  const contentWidth = contentRect.width;
  const triggerRight = triggerRect.right;

  const contentRight = triggerRight + contentWidth + gap;

  return contentRight <= window.innerWidth
    ? TooltipComponentPlacementEnum.RIGHT
    : TooltipComponentPlacementEnum.LEFT;
};

const getTooltipPlacementTop = ({
  contentRef,
  gap,
  triggerRef,
}: Omit<GetPlacementPropsType, 'placement'>): TooltipComponentPlacementEnum => {
  if (!contentRef.current || !triggerRef.current) {
    return TooltipComponentPlacementEnum.TOP;
  }
  const contentRect = contentRef.current.getBoundingClientRect();
  const triggerRect = triggerRef.current.getBoundingClientRect();

  const contentHeight = contentRect.height;
  const triggerTop = triggerRect.top;

  const contentTop = triggerTop - contentHeight - gap;

  return contentTop >= 0 ? TooltipComponentPlacementEnum.TOP : TooltipComponentPlacementEnum.BOTTOM;
};

export { getArrowPosition, getTooltipPlacement, getTooltipPosition };
