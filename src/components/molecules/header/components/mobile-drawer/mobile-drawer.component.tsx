// Components
import { DrawerComponent } from './components/drawer/drawer.component';
import { TriggerComponent } from './components/trigger/trigger.component';
// Hooks
import { MobileDrawerHook } from './hooks/mobile-drawer.hook';
// Styles
import { MobileDrawerComponentStyled } from './mobile-drawer.component.styled';

const MobileDrawerComponent = (): React.ReactElement => {
  const { handleMobileDrawerClose, handleMobileDrawerOpen, open } = MobileDrawerHook();
  return (
    <MobileDrawerComponentStyled>
      <TriggerComponent {...{ onClick: handleMobileDrawerOpen }} />
      <DrawerComponent {...{ onClick: handleMobileDrawerClose, open }} />
    </MobileDrawerComponentStyled>
  );
};

export { MobileDrawerComponent };
