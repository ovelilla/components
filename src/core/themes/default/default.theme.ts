// Vendors
import { DefaultTheme } from 'styled-components';
// Constants
import { DEFAULT_BORDERS } from './borders/default.borders.theme';
import { DEFAULT_BORDER_RADIUS } from './borderRadius/default.border-radius.theme';
import { DEFAULT_BREAKPOINTS } from './breakpoints/default.breakpoints.theme';
import { DEFAULT_COLORS_DARK } from './colors/default.colors.dark.theme';
import { DEFAULT_COLORS_LIGHT } from './colors/default.colors.light.theme';
import { DEFAULT_FONT_SIZES } from './fontSizes/default.font-sizes.theme';
import { DEFAULT_FONT_WEIGHTS } from './fontWeights/default.font-weights.theme';
import { DEFAULT_HEIGHTS } from './heights/default.heights.theme';
import { DEFAULT_OPACITIES } from './opacities/default.opacities.theme';
import { DEFAULT_SHADOWS } from './shadows/default.shadows.theme';
import { DEFAULT_SPACES } from './spaces/default.spaces.theme';
import { DEFAULT_VISIBILITY } from './visibility/default.visibility.theme';
import { DEFAULT_WIDTHS } from './widths/default.widths.theme';

const COMMON_THEME = {
  borders: DEFAULT_BORDERS,
  borderRadius: DEFAULT_BORDER_RADIUS,
  breakpoints: DEFAULT_BREAKPOINTS,
  fontSizes: DEFAULT_FONT_SIZES,
  fontWeights: DEFAULT_FONT_WEIGHTS,
  heights: DEFAULT_HEIGHTS,
  opacities: DEFAULT_OPACITIES,
  shadows: DEFAULT_SHADOWS,
  spaces: DEFAULT_SPACES,
  visibility: DEFAULT_VISIBILITY,
  widths: DEFAULT_WIDTHS,
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
