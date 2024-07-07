// Enums
import {
  ButtonComponentAlignmentEnum,
  ButtonComponentFontSizeEnum,
  ButtonComponentModeEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';

const BUTTON_PROPS = {
  alignment: ButtonComponentAlignmentEnum.LEFT,
  fontSize: ButtonComponentFontSizeEnum.SMALL,
  fullWidth: true,
  mode: ButtonComponentModeEnum.LINK,
  type: 'button',
  variant: ButtonComponentVariantEnum.GHOST,
} as const;

const SIDENAV = [
  {
    title: 'Atoms',
    items: [
      {
        name: 'Button',
        link: '/components/atoms/button',
      },
      {
        name: 'Link',
        link: '/components/atoms/link',
      },
      {
        name: 'Paragraph',
        link: '/components/atoms/paragraph',
      },
      {
        name: 'Scrollarea',
        link: '/components/atoms/scrollarea',
      },
      {
        name: 'Tooltip',
        link: '/components/atoms/tooltip',
      },
    ],
  },
  {
    title: 'Molecules',
    items: [
      {
        name: 'Datepicker',
        link: '/components/molecules/datepicker',
      },
      {
        name: 'Dialog',
        link: '/components/molecules/dialog',
      },
    ],
  },
  {
    title: 'Organisms',
    items: [],
  },
  {
    title: 'Templates',
    items: [],
  },
  {
    title: 'Pages',
    items: [],
  },
  {
    title: 'Theme',
    items: [
      {
        name: 'Colors',
        link: '/components/theme/colors',
      },
    ],
  },
] as const;

export { BUTTON_PROPS, SIDENAV };
