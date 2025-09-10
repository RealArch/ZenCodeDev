import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-home-main-header',
  imports: [RouterLink],
  templateUrl: './home-main-header.html',
  styleUrl: './home-main-header.scss'
})
export class HomeMainHeader {

  constructor(public translation: Translation) {}

}
