import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { getAnalytics, logEvent } from '@angular/fire/analytics';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { FirebaseApp } from '@angular/fire/app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web');


  constructor(@Inject(PLATFORM_ID) private platformId: Object, private app: FirebaseApp) { // Inyecta FirebaseApp
    console.log(environment.env)
    if (isPlatformBrowser(this.platformId)) {
      const analytics = getAnalytics(this.app); // Pasa la instancia de la app
      logEvent(analytics, 'app_start');
    }
  }
}


