// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogHandlersPropsType = {
  open: boolean;
  setHasHorizontalScroll: Dispatch<SetStateAction<boolean>>;
  setHasVerticalScroll: Dispatch<SetStateAction<boolean>>;
};

export { DialogHandlersPropsType };
