import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { getAnalytics, logEvent } from '@angular/fire/analytics';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web');
  constructor() {
    console.log(environment.env)
  }
  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const analytics = getAnalytics();
  //     logEvent(analytics, 'app_start'); // Ejemplo de evento
  //   }

  // }
}
