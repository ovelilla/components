// Vendors
import { Dispatch, SetStateAction } from 'react';

type AnimationEndEventHandlerPropsType = {
  open: boolean;
  setShouldRender: Dispatch<SetStateAction<boolean>>;
};

export { AnimationEndEventHandlerPropsType };
