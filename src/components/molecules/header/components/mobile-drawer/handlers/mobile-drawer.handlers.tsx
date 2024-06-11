import { MobileDrawerCloseHandlerPropsType } from './types/mobile-drawer-close-handler.props.type';
import { MobileDrawerHandlersPropsType } from './types/mobile-drawer.handlers.props.type';
import { MobileDrawerHandlersReturnType } from './types/mobile-drawer.handlers.return.type';
import { MobileDrawerOpenHandlerPropsType } from './types/mobile-drawer-open-handler.props.type';

const mobileDrawerCloseHandler = ({ setOpen }: MobileDrawerCloseHandlerPropsType): void => {
  setOpen(false);
};

const mobileDrawerOpenHandler = ({ setOpen }: MobileDrawerOpenHandlerPropsType): void => {
  setOpen(true);
};

const MobileDrawerHandlers = ({
  setOpen,
}: MobileDrawerHandlersPropsType): MobileDrawerHandlersReturnType => {
  return {
    handleMobileDrawerClose: () => mobileDrawerCloseHandler({ setOpen }),
    handleMobileDrawerOpen: () => mobileDrawerOpenHandler({ setOpen }),
  };
};

export { MobileDrawerHandlers };
