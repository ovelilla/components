// Vendors
import { DefaultTheme } from 'styled-components';
// Constants
import { DEFAULT_BORDER } from './borders/default.borders.theme';
import { DEFAULT_BORDER_RADIUS } from './borderRadius/default.border-radius.theme';
import { DEFAULT_BREAKPOINTS } from './breakpoints/default.breakpoints.theme';
import { DEFAULT_COLORS_DARK } from './colors/default.colors.dark.theme';
import { DEFAULT_COLORS_LIGHT } from './colors/default.colors.light.theme';
import { DEFAULT_FONT_SIZES } from './fontSizes/default.font-sizes.theme';
import { DEFAULT_HEIGHT } from './height/default.height.theme';
import { DEFAULT_SPACES } from './spaces/default.spaces.theme';
import { DEFAULT_WIDTH } from './width/default.width.theme';

const COMMON_THEME = {
  border: DEFAULT_BORDER,
  borderRadius: DEFAULT_BORDER_RADIUS,
  breakpoints: DEFAULT_BREAKPOINTS,
  fontSizes: DEFAULT_FONT_SIZES,
  height: DEFAULT_HEIGHT,
  spaces: DEFAULT_SPACES,
  width: DEFAULT_WIDTH,
} as const;

const DARK_THEME: DefaultTheme = {
  colors: DEFAULT_COLORS_DARK,
  ...COMMON_THEME,
} as const;

const LIGHT_THEME: DefaultTheme = {
  colors: DEFAULT_COLORS_LIGHT,
  ...COMMON_THEME,
} as const;

export { DARK_THEME, LIGHT_THEME };
