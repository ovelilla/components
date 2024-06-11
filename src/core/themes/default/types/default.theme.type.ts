// Vendors
import 'styled-components';
// Constants
import { DEFAULT_BORDER } from '../borders/default.borders.theme';
import { DEFAULT_BORDER_RADIUS } from '../borderRadius/default.border-radius.theme';
import { DEFAULT_BREAKPOINTS } from '../breakpoints/default.breakpoints.theme';
import { DEFAULT_COLORS_DARK } from '../colors/default.colors.dark.theme';
import { DEFAULT_COLORS_LIGHT } from '../colors/default.colors.light.theme';
import { DEFAULT_FONT_SIZES } from '../fontSizes/default.font-sizes.theme';
import { DEFAULT_HEIGHT } from '../height/default.height.theme';
import { DEFAULT_SPACES } from '../spaces/default.spaces.theme';
import { DEFAULT_WIDTH } from '../width/default.width.theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    border: typeof DEFAULT_BORDER;
    borderRadius: typeof DEFAULT_BORDER_RADIUS;
    breakpoints: typeof DEFAULT_BREAKPOINTS;
    colors: typeof DEFAULT_COLORS_DARK | typeof DEFAULT_COLORS_LIGHT;
    fontSizes: typeof DEFAULT_FONT_SIZES;
    height: typeof DEFAULT_HEIGHT;
    spaces: typeof DEFAULT_SPACES;
    width: typeof DEFAULT_WIDTH;
  }
}
