import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private router = inject(Router);

  getCurrentLang(pathname?: string): 'es' | 'en' {
    const p = pathname || (typeof window !== 'undefined' ? window.location.pathname : '/es');
    const match = /^\/(es|en)(\/|$)/.exec(p);
    return (match ? match[1] : 'es') as 'es' | 'en';
  }

  getOppositeLang(): 'es' | 'en' {
    return this.getCurrentLang() === 'es' ? 'en' : 'es';
  }

  switchTo(lang: 'es' | 'en') {
    if (typeof window === 'undefined') return;
    const current = window.location.pathname; // /es/..., /en/...
    const rest = current.replace(/^\/(es|en)/, ''); // /..., ''
    const target = `/${lang}${rest || ''}` || `/${lang}`;
    this.router.navigateByUrl(target || '/'+lang);
    try { localStorage.setItem('lang', lang); } catch {}
  }

  toggleLang() {
    this.switchTo(this.getOppositeLang());
  }
}
