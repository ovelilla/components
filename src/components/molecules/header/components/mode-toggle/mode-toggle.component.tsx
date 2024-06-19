// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
// Constants
import { BUTTON_PROPS, ICON_PROPS } from './constants/mode-toggle.component.constants';
// Enums
import { ThemeProviderTypeEnum } from 'core/providers/theme/enums/theme.provider.enums';
// Icons
import { Moon, Sun } from 'lucide-react';
// Stores
import { useThemeProviderStore } from 'core/providers/theme/stores/theme.provider.store';
// Styles
import { ModeToggleComponentStyled } from './mode-toggle.component.styled';

const ModeToggleComponent = (): React.ReactElement => {
  const { theme, toggleTheme } = useThemeProviderStore();

  return (
    <ModeToggleComponentStyled>
      <ButtonComponent
        {...{
          onClick: toggleTheme,
          ...BUTTON_PROPS,
        }}>
        {theme === ThemeProviderTypeEnum.LIGHT ? <Moon {...ICON_PROPS} /> : <Sun {...ICON_PROPS} />}
      </ButtonComponent>
    </ModeToggleComponentStyled>
  );
};

export { ModeToggleComponent };
