import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Translation } from './translation';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title,
    private translation: Translation
  ) {}

  updateSeoForPage(pageKey: string) {
    const lang = this.translation.currentLanguage();
    
    // Definir meta tags específicos por página y idioma
    const seoData = this.getSeoData(pageKey, lang);
    
    if (seoData) {
      // Actualizar título
      this.title.setTitle(seoData.title);
      
      // Actualizar meta description
      this.meta.updateTag({ 
        name: 'description', 
        content: seoData.description 
      });
      
      // Actualizar meta keywords
      this.meta.updateTag({ 
        name: 'keywords', 
        content: seoData.keywords 
      });
      
      // Actualizar hreflang
      this.updateHrefLang();
      
      // Actualizar Open Graph tags
      this.updateOpenGraphTags(seoData);
    }
  }

  private updateHrefLang() {
    const currentUrl = window.location.pathname;
    const currentLang = this.translation.currentLanguage();
    
    // Remover hreflang existentes
    const existingHrefLang = document.querySelectorAll('link[hreflang]');
    existingHrefLang.forEach(link => link.remove());
    
    // Agregar nuevos hreflang
    const hrefLangLinks = this.createHrefLangLinks(currentUrl, currentLang);
    hrefLangLinks.forEach(link => {
      document.head.appendChild(link);
    });
  }

  private createHrefLangLinks(currentUrl: string, currentLang: 'es' | 'en'): HTMLLinkElement[] {
    const links: HTMLLinkElement[] = [];
    const baseUrl = window.location.origin;
    
    // URL para español (ruta base)
    const spanishUrl = currentUrl.startsWith('/en') 
      ? currentUrl.replace('/en', '') || '/'
      : currentUrl;
    
    // URL para inglés (con /en)
    const englishUrl = currentUrl.startsWith('/en') 
      ? currentUrl 
      : '/en' + currentUrl;
    
    // Link para español
    const esLink = document.createElement('link');
    esLink.rel = 'alternate';
    esLink.hreflang = 'es';
    esLink.href = baseUrl + spanishUrl;
    links.push(esLink);
    
    // Link para inglés
    const enLink = document.createElement('link');
    enLink.rel = 'alternate';
    enLink.hreflang = 'en';
    enLink.href = baseUrl + englishUrl;
    links.push(enLink);
    
    // Link x-default (español por defecto)
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = baseUrl + spanishUrl;
    links.push(defaultLink);
    
    return links;
  }

  private updateOpenGraphTags(seoData: any) {
    this.meta.updateTag({ property: 'og:title', content: seoData.title });
    this.meta.updateTag({ property: 'og:description', content: seoData.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: window.location.href });
  }

  private getSeoData(pageKey: string, lang: 'es' | 'en') {
    const seoDataMap: Record<string, Record<'es' | 'en', any>> = {
      home: {
        es: {
          title: 'Zencode - Desarrollo de Software y Aplicaciones Móviles en Orlando',
          description: 'Agencia de desarrollo de software especializada en aplicaciones móviles y tiendas online. Diseño minimalista y desarrollo de alto impacto en Orlando, Florida.',
          keywords: 'desarrollo software, aplicaciones móviles, tienda online, Orlando, Florida, desarrollo web, e-commerce'
        },
        en: {
          title: 'Zencode - Software Development and Mobile Apps in Orlando',
          description: 'Software development agency specialized in mobile applications and online stores. Minimalist design and high-impact development in Orlando, Florida.',
          keywords: 'software development, mobile apps, online store, Orlando, Florida, web development, e-commerce'
        }
      },
      services: {
        es: {
          title: 'Servicios de Desarrollo - Zencode Orlando',
          description: 'Conoce nuestros servicios de desarrollo de software, aplicaciones móviles y tiendas online. Soluciones personalizadas para tu negocio.',
          keywords: 'servicios desarrollo, aplicaciones móviles, tienda online, desarrollo personalizado, Orlando'
        },
        en: {
          title: 'Development Services - Zencode Orlando',
          description: 'Learn about our software development, mobile applications and online store services. Custom solutions for your business.',
          keywords: 'development services, mobile applications, online store, custom development, Orlando'
        }
      },
      contact: {
        es: {
          title: 'Contacto - Zencode Orlando',
          description: 'Contáctanos para desarrollar tu próximo proyecto de software. Estamos en Orlando, Florida. Consulta gratuita disponible.',
          keywords: 'contacto, desarrollo software, consulta gratuita, Orlando, Florida'
        },
        en: {
          title: 'Contact - Zencode Orlando',
          description: 'Contact us to develop your next software project. We are in Orlando, Florida. Free consultation available.',
          keywords: 'contact, software development, free consultation, Orlando, Florida'
        }
      }
    };

    return seoDataMap[pageKey]?.[lang];
  }
}
