// Vendors
import React from 'react';
import { RouterProvider as ReactRouterDomProvider } from 'react-router-dom';
// Configurations
import { router } from './configurations/router.provider.configuration';

const RouterProvider = (): React.ReactElement => <ReactRouterDomProvider {...{ router }} />;

export { RouterProvider };
