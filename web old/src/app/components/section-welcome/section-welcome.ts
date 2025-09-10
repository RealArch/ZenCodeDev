import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-section-welcome',
  imports: [RouterLink],
  templateUrl: './section-welcome.html',
  styleUrl: './section-welcome.scss'
})
export class SectionWelcome {

  constructor(public translation: Translation) {}

}
