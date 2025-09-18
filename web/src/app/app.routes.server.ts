import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  //Todo loq ue empiece con r/ se excluye del ssr
    {
    path: ':lang/r/**',
    renderMode: RenderMode.Client
  },
  //De resto va al ssr
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
