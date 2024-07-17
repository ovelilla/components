// Vendors
import { Dispatch, SetStateAction } from 'react';

type MouseDownEventHandlerPropsType = {
  event: React.MouseEvent<HTMLDivElement>;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
};

export { MouseDownEventHandlerPropsType };
