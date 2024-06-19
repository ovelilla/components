// Vendors
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
// Constants
import { DARK_THEME, LIGHT_THEME } from 'core/themes/default/default.theme';
// Enums
import { ThemeProviderTypeEnum } from '../enums/theme.provider.enums';

type ThemeProviderStateType = {
  theme: ThemeProviderTypeEnum;
  setTheme: (theme: ThemeProviderTypeEnum) => void;
  toggleTheme: VoidFunction;
  getTheme: () => typeof LIGHT_THEME | typeof DARK_THEME;
};

const useThemeProviderStore = create<ThemeProviderStateType>()(
  persist(
    (set, get) => ({
      theme: ThemeProviderTypeEnum.LIGHT,
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({
          theme:
            state.theme === ThemeProviderTypeEnum.LIGHT
              ? ThemeProviderTypeEnum.DARK
              : ThemeProviderTypeEnum.LIGHT,
        })),
      getTheme: () => (get().theme === ThemeProviderTypeEnum.LIGHT ? LIGHT_THEME : DARK_THEME),
    }),

    {
      name: 'theme-provider',
    }
  )
);

export { useThemeProviderStore };
