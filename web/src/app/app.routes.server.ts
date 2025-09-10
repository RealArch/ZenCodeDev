import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  //Todo loq ue empiece con r/ se excluye del ssr
  {
    path: 'r/**',
    renderMode: RenderMode.Client
  },
  // Rutas con parámetros para prerenderizar
  {
    path: ':lang',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [{ lang: 'es' }, { lang: 'en' }]
  },
  {
    path: ':lang/services',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [{ lang: 'es' }, { lang: 'en' }]
  },
  //De resto va al ssr
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
