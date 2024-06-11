// Vendors
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
// Constants
import { DARK_THEME, LIGHT_THEME } from 'core/themes/default/default.theme';
// Enumerations
import { ThemeProviderTypeEnumeration } from '../enumerations/theme.provider.enumerations';

type ThemeProviderStateType = {
  theme: ThemeProviderTypeEnumeration;
  setTheme: (theme: ThemeProviderTypeEnumeration) => void;
  toggleTheme: VoidFunction;
  getTheme: () => typeof LIGHT_THEME | typeof DARK_THEME;
};

const useThemeProviderStore = create<ThemeProviderStateType>()(
  persist(
    (set, get) => ({
      theme: ThemeProviderTypeEnumeration.LIGHT,
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({
          theme:
            state.theme === ThemeProviderTypeEnumeration.LIGHT
              ? ThemeProviderTypeEnumeration.DARK
              : ThemeProviderTypeEnumeration.LIGHT,
        })),
      getTheme: () =>
        get().theme === ThemeProviderTypeEnumeration.LIGHT ? LIGHT_THEME : DARK_THEME,
    }),

    {
      name: 'theme-provider',
    }
  )
);

export { useThemeProviderStore };
