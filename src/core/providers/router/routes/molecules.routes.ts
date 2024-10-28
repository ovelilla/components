const moleculesRoutes = [
  {
    path: '/components/molecules/confirm-dialog',
    async lazy() {
      const { ConfirmDialogPage } = await import(
        'pages/molecules/confirm-dialog/confirm-dialog.page'
      );
      return { Component: ConfirmDialogPage };
    },
  },
  {
    path: '/components/molecules/datepicker',
    async lazy() {
      const { DatepickerPage } = await import('pages/molecules/datepicker/datepicker.page');
      return { Component: DatepickerPage };
    },
  },
  {
    path: '/components/molecules/dialog',
    async lazy() {
      const { DialogPage } = await import('pages/molecules/dialog/dialog.page');
      return { Component: DialogPage };
    },
  },
];

export { moleculesRoutes };
