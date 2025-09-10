import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import '@angular/common/locales/global/es';
import '@angular/common/locales/global/en';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';

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
    provideClientHydration(
      withEventReplay()),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),

    ScreenTrackingService,
    UserTrackingService,
    {
      provide: LOCALE_ID,
      useFactory: () => {
        if (typeof window === 'undefined') return 'es';
        const match = /^\/(es|en)(\/|$)/.exec(window.location.pathname);
        if (match) {
          localStorage.setItem('lang', match[1]);
          return match[1];
        }
        const stored = localStorage.getItem('lang');
        if (stored === 'es' || stored === 'en') return stored;
        return (navigator.language.startsWith('en') ? 'en' : 'es');
      }
    }
  ]
};
