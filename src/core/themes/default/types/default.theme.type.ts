// Vendors
import 'styled-components';
// Constants
import { DEFAULT_BORDER_RADIUS } from '../borderRadius/default.border-radius.theme';
import { DEFAULT_BORDERS } from '../borders/default.borders.theme';
import { DEFAULT_BREAKPOINTS } from '../breakpoints/default.breakpoints.theme';
import { DEFAULT_COLORS_DARK } from '../colors/default.colors.dark.theme';
import { DEFAULT_COLORS_LIGHT } from '../colors/default.colors.light.theme';
import { DEFAULT_FONT_SIZES } from '../fontSizes/default.font-sizes.theme';
import { DEFAULT_FONT_WEIGHTS } from '../fontWeights/default.font-weights.theme';
import { DEFAULT_HEIGHTS } from '../heights/default.heights.theme';
import { DEFAULT_OPACITIES } from '../opacities/default.opacities.theme';
import { DEFAULT_SHADOWS } from '../shadows/default.shadows.theme';
import { DEFAULT_SPACES } from '../spaces/default.spaces.theme';
import { DEFAULT_VISIBILITY } from '../visibility/default.visibility.theme';
import { DEFAULT_WIDTHS } from '../widths/default.widths.theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: typeof DEFAULT_BORDER_RADIUS;
    borders: typeof DEFAULT_BORDERS;
    breakpoints: typeof DEFAULT_BREAKPOINTS;
    colors: typeof DEFAULT_COLORS_DARK | typeof DEFAULT_COLORS_LIGHT;
    fontSizes: typeof DEFAULT_FONT_SIZES;
    fontWeights: typeof DEFAULT_FONT_WEIGHTS;
    heights: typeof DEFAULT_HEIGHTS;
    opacities: typeof DEFAULT_OPACITIES;
    shadows: typeof DEFAULT_SHADOWS;
    spaces: typeof DEFAULT_SPACES;
    visibility: typeof DEFAULT_VISIBILITY;
    widths: typeof DEFAULT_WIDTHS;
  }
}
