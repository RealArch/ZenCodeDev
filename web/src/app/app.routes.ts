import { Routes } from '@angular/router';

const publicChildren: Routes = [
    { path: '', loadComponent: () => import('./pages/public/home/home').then(m => m.Home) },
    { path: 'services', loadComponent: () => import('./pages/public/services/services').then(m => m.Services) },
    { path: 'contact', loadComponent: () => import('./pages/public/contact/contact').then(m => m.Contact) },
];

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/es' },
    {
        path: ':lang',
        loadComponent: () => import('./pages/public/public').then(m => m.Public),
        children: publicChildren
    },
    {
        path: 'r/:code',
        loadComponent: () => import('./pages/public/redirect/redirect').then(m => m.Redirect),
        data: { renderMode: 'disable' }
    },
    { path: '**', redirectTo: '' }
];
