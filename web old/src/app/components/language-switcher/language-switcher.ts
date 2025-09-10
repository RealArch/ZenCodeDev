import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {

  constructor(
    private router: Router,
    private translationService: Translation
  ) {}

  switchLanguage(lang: 'es' | 'en') {
    // Use the translation service for route-based navigation
    this.translationService.switchLanguage(lang);
  }

  getCurrentLanguage(): string {
    return this.translationService.currentLanguage();
  }

}
