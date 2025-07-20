import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // Para que vaya al top en nuevas páginas y restaure en el 'back'
        anchorScrolling: 'enabled',           // Opcional: Para que funcione el scroll a fragmentos (#id)
      })
    ),
    provideClientHydration(withEventReplay())
  ]
};
