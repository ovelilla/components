const themeRoutes = [
  {
    path: '/components/theme/colors',
    async lazy() {
      const { ColorsPage } = await import('pages/theme/colors/colors.page');
      return { Component: ColorsPage };
    },
  },
];

export { themeRoutes };
