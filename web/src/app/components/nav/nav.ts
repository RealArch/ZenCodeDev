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
}
