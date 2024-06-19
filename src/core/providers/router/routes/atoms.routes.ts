const atomsRoutes = [
  {
    path: '/components/atoms/button',
    async lazy() {
      const { ButtonPage } = await import('pages/atoms/button/button.page');
      return { Component: ButtonPage };
    },
  },
  {
    path: '/components/atoms/link',
    async lazy() {
      const { LinkPage } = await import('pages/atoms/link/link.page');
      return { Component: LinkPage };
    },
  },
];

export { atomsRoutes };
