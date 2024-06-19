const DEFAULT_SHADOWS = {
  shadow2Xl: '0 25px 50px -12px rgb(0 0 0 / 0.25);',
  shadowInner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05);',
  shadowLg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
  shadowMd: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
  shadowNone: 'none;',
  shadowSm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
  shadowXl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);',
  shadowXs: '0px 1px 2px 0px rgba(0, 0, 0, 0.05);',
} as const;

export { DEFAULT_SHADOWS };
