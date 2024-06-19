const moleculesRoutes = [
  {
    path: '/components/molecules/datepicker',
    async lazy() {
      const { DatepickerPage } = await import('pages/molecules/datepicker/datepicker.page');
      return { Component: DatepickerPage };
    },
  },
];

export { moleculesRoutes };
