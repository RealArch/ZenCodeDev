import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/public/public').then(m => m.Public),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/public/home/home').then(m => m.Home)
            },
            {
                path: 'services',
                loadComponent: () => import('./pages/public/services/services').then(m => m.Services)
            },
            {
                path: 'contact',
                loadComponent: () => import('./pages/public/contact/contact').then(m => m.Contact)
            },

        ]
    },

];
