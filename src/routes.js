/**
 * created by : Risyandi
 * 2021
 */

import React from 'react';

const Homepage = React.lazy(() => import('./pages/Homepage'));
const Moviespage = React.lazy(() => import('./pages/Movies'));

const routes = [{
        path: '/',
        exact: true,
        name: 'Homepage',
        component: Homepage,
        typeLayout: 'full-layout'
    },
    {
        path: '/movies',
        restricted: true,
        exact: true,
        name: 'Movies',
        component: Moviespage,
        typeLayout: 'full-layout'
    },
    {
        path: '/movies/detail/:id',
        restricted: true,
        exact: true,
        name: 'Detail Movies',
        component: Moviespage,
        typeLayout: 'full-layout'
    }
];

export default routes;