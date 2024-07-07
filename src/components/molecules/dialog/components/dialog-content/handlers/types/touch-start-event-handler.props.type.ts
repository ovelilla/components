// Vendors
import React, { Dispatch, SetStateAction } from 'react';

type TouchStartEventHandlerPropsType = {
  event: React.TouchEvent<HTMLDivElement>;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
};

export { TouchStartEventHandlerPropsType };
