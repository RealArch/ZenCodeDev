import { Component } from '@angular/core';
import { HomeMainHeader } from '../../../components/home-main-header/home-main-header';
import { SectionWelcome } from '../../../components/section-welcome/section-welcome';
import { SectionSpecialty } from '../../../components/section-specialty/section-specialty';
import { SectionGeneralSolutions } from '../../../components/section-general-solutions/section-general-solutions';
import { MainFooter } from '../../../components/main-footer/main-footer';
import { SectionFeatures1 } from '../../../components/section-features-1/section-features-1';

@Component({
  selector: 'app-home',
  imports: [HomeMainHeader, SectionWelcome, SectionFeatures1, SectionGeneralSolutions],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
