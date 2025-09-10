import { Injectable, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface Translations {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class Translation {
  
  currentLanguage = signal<'es' | 'en'>('es');
  
  private translations: Record<'es' | 'en', Translations> = {
    es: {
      // Home Header
      'homeHeaderTitle': 'Su empresa es única. Su software también debería serlo.',
      'homeHeaderDescription': 'Diseñamos experiencias únicas y funcionales, pensadas para convertir visitantes en clientes y hacer crecer tu tienda online desde el primer clic.',
      'homeHeaderButton': 'Construyamos su Solución',
      'homeHeaderImageAlt': 'Desarrollo de aplicaciones móviles a medida en Orlando - Zencode',
      
      // Welcome Section
      'welcomeTitle': 'Bienvenido a Zencode.',
      'welcomeDescription': 'Somos una agencia de desarrollo de software enfocada en crear aplicaciones móviles y tiendas en línea de alto impacto. Con una filosofía de diseño minimalista, construimos plataformas potentes, intuitivas y atractivas que mejoran la experiencia de tus usuarios y hacen crecer tu negocio.',
      'welcomeButton1': 'Nuestras Soluciones',
      'welcomeButton2': 'Contáctanos',
      'welcomeImageAlt': 'Empresa de desarrollo de software especializada en aplicaciones móviles y tiendas online',
      
      // Navigation
      'navHome': 'Inicio',
      'navServices': 'Servicios',
      'navContact': 'Contacto'
    },
    en: {
      // Home Header
      'homeHeaderTitle': 'Your business is unique. Your software should be too.',
      'homeHeaderDescription': 'We design unique and functional experiences, designed to convert visitors into customers and grow your online store from the first click.',
      'homeHeaderButton': "Let's Build Your Solution",
      'homeHeaderImageAlt': 'Custom mobile app development in Orlando - Zencode',
      
      // Welcome Section
      'welcomeTitle': 'Welcome to Zencode.',
      'welcomeDescription': 'We are a software development agency focused on creating high-impact mobile applications and online stores. With a minimalist design philosophy, we build powerful, intuitive and attractive platforms that improve your users experience and grow your business.',
      'welcomeButton1': 'Our Solutions',
      'welcomeButton2': 'Contact Us',
      'welcomeImageAlt': 'Software development company specialized in mobile applications and online stores',
      
      // Navigation
      'navHome': 'Home',
      'navServices': 'Services',
      'navContact': 'Contact'
    }
  };

  constructor(private router: Router) {
    // Escuchar cambios de ruta para detectar idioma automáticamente
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.detectLanguageFromUrl(event.url);
    });
    
    // Detectar idioma inicial
    this.detectLanguageFromUrl(this.router.url);
  }

  private detectLanguageFromUrl(url: string) {
    const isEnglish = url.startsWith('/en');
    const newLang: 'es' | 'en' = isEnglish ? 'en' : 'es';
    
    if (this.currentLanguage() !== newLang) {
      this.currentLanguage.set(newLang);
    }
  }

  translate(key: string): string {
    return this.translations[this.currentLanguage()][key] || key;
  }

  switchLanguage(targetLang: 'es' | 'en') {
    const currentUrl = this.router.url;
    let newUrl: string;
    
    if (targetLang === 'en') {
      // Cambiar a inglés: agregar /en al inicio
      if (currentUrl.startsWith('/en')) {
        return; // Ya está en inglés
      }
      newUrl = '/en' + currentUrl;
    } else {
      // Cambiar a español: quitar /en del inicio
      if (!currentUrl.startsWith('/en')) {
        return; // Ya está en español
      }
      newUrl = currentUrl.replace('/en', '') || '/';
    }
    
    // Navegar a la nueva URL
    this.router.navigateByUrl(newUrl);
  }

  getCurrentLanguageFromRoute(): 'es' | 'en' {
    return this.router.url.startsWith('/en') ? 'en' : 'es';
  }
}
