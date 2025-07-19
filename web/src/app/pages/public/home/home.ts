import { Component } from '@angular/core';
import { HomeMainHeader } from '../../../components/home-main-header/home-main-header';
import { SectionWelcome } from '../../../components/section-welcome/section-welcome';
import { SectionSpecialty } from '../../../components/section-specialty/section-specialty';
import { SectionGeneralSolutions } from '../../../components/section-general-solutions/section-general-solutions';
import { MainFooter } from '../../../components/main-footer/main-footer';

@Component({
  selector: 'app-home',
  imports: [HomeMainHeader, SectionWelcome, SectionSpecialty, SectionGeneralSolutions],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
