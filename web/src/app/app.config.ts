import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

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
    provideFirebaseApp(() => initializeApp({
      projectId: "zencodedev",
      appId: "1:207807197428:web:0d66c22d586e31aca9aea1",
      storageBucket: "zencodedev.firebasestorage.app",
      apiKey: "AIzaSyAqlG_yjmNl6rXgmgO40Vl1FXcFRL1rRWg",
      authDomain: "zencodedev.firebaseapp.com", messagingSenderId:
        "207807197428", measurementId: "G-JW7ZJNWBJC"
    })),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    provideFirestore(() => getFirestore())
  ]
};
