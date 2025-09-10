import { Component, EventEmitter, Output, computed, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButton } from '@angular/material/button'
import { LanguageService } from '../../services/language.service';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-nav',
  imports: [RouterLink, MatMenuModule, UpperCasePipe],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav implements OnInit {
@Output() toggleDrawer = new EventEmitter<void>();
  currentLang = signal<'es' | 'en'>('es');
  altLang = computed(() => this.currentLang() === 'es' ? 'EN' : 'ES');

  constructor(private lang: LanguageService) {}

  ngOnInit() {
    this.currentLang.set(this.lang.getCurrentLang());
  }

  toggle() {
    this.toggleDrawer.emit();
  } 

  switchLang() {
    const next = this.currentLang() === 'es' ? 'en' : 'es';
    this.lang.switchTo(next);
    this.currentLang.set(next);
  }

  handleLangChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as 'es' | 'en';
    this.lang.switchTo(value);
    this.currentLang.set(value);
  }
}
