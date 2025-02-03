import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '', 
        loadChildren: () => import('./pages/main/main.routes').then(m => m.mainRoutes),
        canActivateChild: [privateGuard]
    },
    {
        path: 'auth', 
        loadChildren: () => import('./pages/auth/auth.routes').then(m => m.authRoutes),
        canActivateChild: [publicGuard]
    },
    {
        path: '**', 
        loadComponent: () => import('./pages/notfound/notfound.component')
    }
];
