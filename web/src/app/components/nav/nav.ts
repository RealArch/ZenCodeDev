import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButton } from '@angular/material/button'
@Component({
  selector: 'app-nav',
  imports: [RouterLink, MatMenuModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
@Output() toggleDrawer = new EventEmitter<void>();

  toggle() {
    this.toggleDrawer.emit();
  } 

  getCurrentLang(): string {
    // Detect language from current URL path
    const match = window.location.pathname.match(/^\/(es|en)(\/|$)/);
    return match ? match[1] : 'es';
  }

  switchLang(event: Event) {
    const lang = (event.target as HTMLSelectElement)?.value || 'es';
    const path = window.location.pathname;
    const match = path.match(/^\/(es|en)(\/.*)?$/);
    let newPath = '/' + lang;
    if (match && match[2]) {
      newPath += match[2];
    }
    window.location.pathname = newPath;
  }
}
