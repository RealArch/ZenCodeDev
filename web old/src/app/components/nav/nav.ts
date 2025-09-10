import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButton } from '@angular/material/button'
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, MatMenuModule, LanguageSwitcher],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
  @Output() toggleDrawer = new EventEmitter<void>();

  constructor(public translation: Translation) {}

  toggle() {
    this.toggleDrawer.emit();
  } 
}
