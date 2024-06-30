// Enums
import { TooltipComponentPlacementEnum } from '../enums/tooltip.component.enums';
// Types
import { GetTooltipPositionPropsType } from './types/get-tooltip-position.props.type';
import { GetTooltipPositionReturnType } from './types/get-tooltip-position.return.type';

const getArrowBottomPosition = ({
  contentRef,
  gap,
  triggerRef,
}: Omit<GetTooltipPositionPropsType, 'placement'>): GetTooltipPositionReturnType => {
  return { left: 0, top: 0 };
};

const getArrowLeftPosition = ({
  contentRef,
  gap,
  triggerRef,
}: Omit<GetTooltipPositionPropsType, 'placement'>): GetTooltipPositionReturnType => {
  return { left: 0, top: 0 };
};

const getArrowPosition = ({
  contentRef,
  gap,
  placement,
  triggerRef,
}: GetTooltipPositionPropsType): GetTooltipPositionReturnType => {
  return {
    [TooltipComponentPlacementEnum.BOTTOM]: getArrowBottomPosition({
      contentRef,
      gap,
      triggerRef,
    }),
    [TooltipComponentPlacementEnum.LEFT]: getArrowLeftPosition({ contentRef, gap, triggerRef }),
    [TooltipComponentPlacementEnum.RIGHT]: getArrowRightPosition({ contentRef, gap, triggerRef }),
    [TooltipComponentPlacementEnum.TOP]: getArrowTopPosition({ contentRef, gap, triggerRef }),
  }[placement];
};

const getArrowRightPosition = ({
  contentRef,
  gap,
  triggerRef,
}: Omit<GetTooltipPositionPropsType, 'placement'>): GetTooltipPositionReturnType => {
  return { left: 0, top: 0 };
};

const getArrowTopPosition = ({
  contentRef,
  gap,
  triggerRef,
}: Omit<GetTooltipPositionPropsType, 'placement'>): GetTooltipPositionReturnType => {
  return { left: 0, top: 0 };
};

const getPlacement = ({
  contentRef,
  gap,
  placement,
  triggerRef,
}: GetTooltipPositionPropsType): TooltipComponentPlacementEnum => {
  return {
    [TooltipComponentPlacementEnum.BOTTOM]: getTooltipBottomPosition({
      contentRef,
      gap,
      triggerRef,
    }),
    [TooltipComponentPlacementEnum.LEFT]: getTooltipLeftPosition({ contentRef, gap, triggerRef }),
    [TooltipComponentPlacementEnum.RIGHT]: getTooltipRightPosition({ contentRef, gap, triggerRef }),
    [TooltipComponentPlacementEnum.TOP]: getTooltipTopPosition({ contentRef, gap, triggerRef }),
  }[placement];
};

const getTooltipBottomPosition = ({
  contentRef,
  gap,
  triggerRef,
}: Omit<GetTooltipPositionPropsType, 'placement'>): GetTooltipPositionReturnType => {
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

const getTooltipLeftPosition = ({
  contentRef,
  gap,
  triggerRef,
}: Omit<GetTooltipPositionPropsType, 'placement'>): GetTooltipPositionReturnType => {
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

  const initialLeft = triggerLeft - contentWidth - gap;
  const adjustedLeft = triggerLeft + triggerWidth + gap;
  const contentLeft = initialLeft >= 0 ? initialLeft : adjustedLeft;
  const contentTop = triggerTop + (triggerWidth - contentHeight) / 2;

  return {
    left: contentLeft,
    top: contentTop,
  };
};

const getTooltipPosition = ({
  contentRef,
  gap,
  placement,
  triggerRef,
}: GetTooltipPositionPropsType): GetTooltipPositionReturnType => {
  return {
    [TooltipComponentPlacementEnum.BOTTOM]: getTooltipBottomPosition({
      contentRef,
      gap,
      triggerRef,
    }),
    [TooltipComponentPlacementEnum.LEFT]: getTooltipLeftPosition({ contentRef, gap, triggerRef }),
    [TooltipComponentPlacementEnum.RIGHT]: getTooltipRightPosition({ contentRef, gap, triggerRef }),
    [TooltipComponentPlacementEnum.TOP]: getTooltipTopPosition({ contentRef, gap, triggerRef }),
  }[placement];
};

const getTooltipRightPosition = ({
  contentRef,
  gap,
  triggerRef,
}: Omit<GetTooltipPositionPropsType, 'placement'>): GetTooltipPositionReturnType => {
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

  const initialLeft = triggerLeft + triggerWidth + gap;
  const adjustedLeft = triggerLeft - contentWidth - gap;
  const contentLeft = initialLeft + contentWidth <= window.innerWidth ? initialLeft : adjustedLeft;
  const contentTop = triggerTop + (triggerWidth - contentHeight) / 2;

  return {
    left: contentLeft,
    top: contentTop,
  };
};

const getTooltipTopPosition = ({
  contentRef,
  gap,
  triggerRef,
}: Omit<GetTooltipPositionPropsType, 'placement'>): GetTooltipPositionReturnType => {
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

export { getPlacement, getTooltipPosition };
