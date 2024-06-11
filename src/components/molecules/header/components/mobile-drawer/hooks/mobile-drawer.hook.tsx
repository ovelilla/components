// Vendors
import { useState } from 'react';
// Handlers
import { MobileDrawerHandlers } from '../handlers/mobile-drawer.handlers';
// Types
import { MobileDrawerHookReturnType } from './types/mobile-drawer.hook.return.type';

const MobileDrawerHook = (): MobileDrawerHookReturnType => {
  const [open, setOpen] = useState(false);

  const { handleMobileDrawerClose, handleMobileDrawerOpen } = MobileDrawerHandlers({
    setOpen,
  });

  return {
    handleMobileDrawerClose,
    handleMobileDrawerOpen,
    open,
  };
};

export { MobileDrawerHook };
