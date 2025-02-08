import { Routes } from "@angular/router";

export const mainRoutes: Routes = [
    {
        path: '', loadComponent: () => import('./movements/movements.component').then(c => c.MovementsComponent)
    },
    {
        path: 'ahorros', loadComponent: () => import('./savings/savings.component').then(c => c.SavingsComponent)
    }
]