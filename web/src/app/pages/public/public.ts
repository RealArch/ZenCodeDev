import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './../../components/nav/nav';
import { MainFooter } from '../../components/main-footer/main-footer';
@Component({
  selector: 'app-public',
  imports: [RouterOutlet, Nav, MainFooter],
  templateUrl: './public.html',
  styleUrl: './public.scss'
})
export class Public {

}
 