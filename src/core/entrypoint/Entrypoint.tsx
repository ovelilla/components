// Vendors
import React from 'react';
// Providers
import { RouterProvider } from 'core/providers/router/router.provider';
import { ThemeProvider } from 'core/providers/theme/theme.provider';

const Entrypoint = (): React.ReactElement => {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
};

export { Entrypoint };
