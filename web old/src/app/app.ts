import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, signal, OnInit, effect } from '@angular/core';
import { getAnalytics, logEvent } from '@angular/fire/analytics';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { environment } from '../environments/environment';
import { FirebaseApp } from '@angular/fire/app';
import { Translation } from './services/translation';
import { SeoService } from './services/seo.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('web');

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, 
    private app: FirebaseApp,
    private translation: Translation,
    private seoService: SeoService,
    private router: Router
  ) {
    console.log(environment.env)
    if (isPlatformBrowser(this.platformId)) {
      const analytics = getAnalytics(this.app);
      logEvent(analytics, 'app_start');
    }

    // Efecto para actualizar SEO cuando cambie el idioma
    effect(() => {
      const currentLang = this.translation.currentLanguage();
      this.updateSeoForCurrentRoute();
    });
  }

  ngOnInit() {
    // Escuchar cambios de ruta para actualizar SEO
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateSeoForCurrentRoute();
    });
  }

  private updateSeoForCurrentRoute() {
    const url = this.router.url;
    let pageKey = 'home';

    // Determinar la página actual basada en la URL
    if (url.includes('/services') || url.includes('/en/services')) {
      pageKey = 'services';
    } else if (url.includes('/contact') || url.includes('/en/contact')) {
      pageKey = 'contact';
    }

    // Actualizar SEO para la página actual
    this.seoService.updateSeoForPage(pageKey);
  }
}


