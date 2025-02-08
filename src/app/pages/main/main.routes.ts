import { Routes } from "@angular/router";

export const mainRoutes: Routes = [
    {
        path: 'movimientos', loadComponent: () => import('./movements/movements.component').then(c => c.MovementsComponent)
    },
    {
        path: 'ahorros', loadComponent: () => import('./savings/savings.component').then(c => c.SavingsComponent)
    },
    {
        path: 'familia', loadComponent: () => import('./family/family.component').then(c => c.FamilyComponent)
    },
    {
        path: '', redirectTo: 'movimientos', pathMatch: 'full'
    }
]