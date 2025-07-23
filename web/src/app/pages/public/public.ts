import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './../../components/nav/nav';
import { MainFooter } from '../../components/main-footer/main-footer';
import {MatSidenavModule, MatDrawerContainer, MatDrawer, MatDrawerContent} from '@angular/material/sidenav';
import { MainSidenav } from '../../components/main-sidenav/main-sidenav';
@Component({
  selector: 'app-public',
  imports: [RouterOutlet, Nav, MainFooter, MatSidenavModule, MatDrawerContainer,
    MainSidenav, MatDrawerContent
  ],
  templateUrl: './public.html',
  styleUrl: './public.scss'
})
export class Public {
  @ViewChild('drawer') drawer!: MatDrawer;
  

}
 