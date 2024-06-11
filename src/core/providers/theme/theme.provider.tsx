// Vendors
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// Stores
import { useThemeProviderStore } from './stores/theme.provider.store';
// Styles
import { ThemeProviderStyled } from './theme.provider.styled';
// Types
import { ThemeProviderPropsType } from './types/theme.provider.props.type';

const ThemeProvider = ({
  children,
}: ThemeProviderPropsType): React.ReactElement<ThemeProviderPropsType> => {
  const { getTheme } = useThemeProviderStore();
  return (
    <StyledThemeProvider {...{ theme: getTheme() }}>
      <ThemeProviderStyled />
      {children}
    </StyledThemeProvider>
  );
};

export { ThemeProvider };
