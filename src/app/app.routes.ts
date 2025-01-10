import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadChildren: () => import('./pages/main/main.routes').then(m => m.mainRoutes)
    },
    {
        path: 'auth', loadChildren: () => import('./pages/auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: '**', loadComponent: () => import('./pages/notfound/notfound.component')
    }
];
