// Enums
import { LinkComponentSizesEnum } from 'components/atoms/link/enums/link.component.enums';

const ICON_PROPS = {
  size: 28,
} as const;

const LINK_PROPS = {
  bold: true,
  href: '/',
  size: LinkComponentSizesEnum.XLARGE,
} as const;

const LOGO_NAME = 'SnappyUI';

export { ICON_PROPS, LINK_PROPS, LOGO_NAME };
