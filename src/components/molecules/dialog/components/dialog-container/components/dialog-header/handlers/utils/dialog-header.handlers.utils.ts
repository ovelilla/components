// Types
import { GetPositionUtilPropsType } from './types/get-position.util.props.type';
import { GetPositionUtilReturnType } from './types/get-position.util.return.type';

const getPosition = ({ initialX, size }: GetPositionUtilPropsType): GetPositionUtilReturnType => {
  const minlLeft = initialX - size.width / 2;
  const clampedToMin = Math.max(minlLeft, 0);
  const maxLeft = window.innerWidth - size.width;
  const clampedToMax = Math.min(clampedToMin, maxLeft);
  const left = Math.max(clampedToMax, 0);

  return { left, top: 0 };
};

export { getPosition };
