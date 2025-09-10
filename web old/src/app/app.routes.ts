import { Routes } from '@angular/router';

export const routes: Routes = [
    // Rutas en español (por defecto - sin prefijo)
    {
        path: '',
        loadComponent: () => import('./pages/public/public').then(m => m.Public),
        data: { lang: 'es' },
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/public/home/home').then(m => m.Home),
                data: { lang: 'es' }
            },
            {
                path: 'services',
                loadComponent: () => import('./pages/public/services/services').then(m => m.Services),
                data: { lang: 'es' }
            },
            {
                path: 'contact',
                loadComponent: () => import('./pages/public/contact/contact').then(m => m.Contact),
                data: { lang: 'es' }
            },
        ]
    },
    // Rutas en inglés (con prefijo /en)
    {
        path: 'en',
        loadComponent: () => import('./pages/public/public').then(m => m.Public),
        data: { lang: 'en' },
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/public/home/home').then(m => m.Home),
                data: { lang: 'en' }
            },
            {
                path: 'services',
                loadComponent: () => import('./pages/public/services/services').then(m => m.Services),
                data: { lang: 'en' }
            },
            {
                path: 'contact',
                loadComponent: () => import('./pages/public/contact/contact').then(m => m.Contact),
                data: { lang: 'en' }
            },
        ]
    },
    {
        path: 'r/:code',
        loadComponent: () => import('./pages/public/redirect/redirect').then(m => m.Redirect),
        data: {
            renderMode: 'disable' // <- esto evita el prerendering en esa ruta
        }
    },
];
