import { Routes } from "@angular/router";

export const mainRoutes: Routes = [
    {
        path: '', loadComponent: () => import('./home/home.component')
    }
]