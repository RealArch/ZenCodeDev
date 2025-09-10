import { Component, EventEmitter, Output, OnInit, signal, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'app-main-sidenav',
  imports: [MatButtonModule, MatRippleModule, RouterLink, RouterLinkActive,
    
  ],
  templateUrl: './main-sidenav.html',
  styleUrl: './main-sidenav.scss'
})
export class MainSidenav implements OnInit {
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
}
