import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-main-sidenav',
  imports: [MatButtonModule, MatRippleModule, RouterLink, RouterLinkActive,
    
  ],
  templateUrl: './main-sidenav.html',
  styleUrl: './main-sidenav.scss'
})
export class MainSidenav {
  @Output() toggleDrawer = new EventEmitter<void>();

  toggle() {
    this.toggleDrawer.emit();
  }
}
