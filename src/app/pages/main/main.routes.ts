import { Routes } from "@angular/router";

export const mainRoutes: Routes = [
    {
        path: '', loadComponent: () => import('./home/home.component')
    },
    {
        path: 'ahorros', loadComponent: () => import('./savings/savings.component').then(c => c.SavingsComponent)
    }
]