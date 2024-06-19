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
    ],
  },
  {
    title: 'Molecules',
    items: [
      {
        name: 'Datepicker',
        link: '/components/molecules/datepicker',
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
] as const;

export { BUTTON_PROPS, SIDENAV };