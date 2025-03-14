import { Routes } from "@angular/router";

export const authRoutes: Routes = [
    {
        path: 'login', loadComponent: () => import('./login/login.component')
    },
    {
        path: 'register', loadComponent: () => import('./singup/singup.component')
    },
    {
        path: 'recuperar-contrasena', loadComponent: () => import('./recover-password/recover-password.component')
    }
]