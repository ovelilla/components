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
  {
    path: '/components/atoms/paragraph',
    async lazy() {
      const { ParagraphPage } = await import('pages/atoms/paragraph/paragraph.page');
      return { Component: ParagraphPage };
    },
  },
  {
    path: '/components/atoms/scrollarea',
    async lazy() {
      const { ScrollareaPage } = await import('pages/atoms/scrollarea/scrollarea.page');
      return { Component: ScrollareaPage };
    },
  },
  {
    path: '/components/atoms/title',
    async lazy() {
      const { TitlePage } = await import('pages/atoms/title/title.page');
      return { Component: TitlePage };
    },
  },
  {
    path: '/components/atoms/tooltip',
    async lazy() {
      const { TooltipPage } = await import('pages/atoms/tooltip/tooltip.page');
      return { Component: TooltipPage };
    },
  },
];

export { atomsRoutes };
