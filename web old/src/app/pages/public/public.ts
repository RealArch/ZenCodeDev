import { Component, inject, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Nav } from './../../components/nav/nav';
import { MainFooter } from '../../components/main-footer/main-footer';
import { MatSidenavModule, MatDrawerContainer, MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
import { MainSidenav } from '../../components/main-sidenav/main-sidenav';
import { ContactWidget } from '../../components/contact-widget/contact-widget';
import { filter } from 'rxjs';
@Component({
  selector: 'app-public',
  imports: [RouterOutlet, Nav, MainFooter, MatSidenavModule, MatDrawerContainer,
    MainSidenav, MatDrawerContent, ContactWidget
  ],
  templateUrl: './public.html',
  styleUrl: './public.scss'
})
export class Public {
  @ViewChild('drawer') drawer!: MatDrawer;

  //Esto para limitar el scroll cuando se abre el sidemenu
  private renderer = inject(Renderer2);

  toggleBodyScroll(isOpen: boolean): void {
    if (isOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
}
