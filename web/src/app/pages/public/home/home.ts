import { Component, DestroyRef, inject, signal } from '@angular/core';
import { HomeMainHeader } from '../../../components/home-main-header/home-main-header';
import { SectionWelcome } from '../../../components/section-welcome/section-welcome';
import { SectionSpecialty } from '../../../components/section-specialty/section-specialty';
import { SectionGeneralSolutions } from '../../../components/section-general-solutions/section-general-solutions';
import { MainFooter } from '../../../components/main-footer/main-footer';
import { SectionFeatures1 } from '../../../components/section-features-1/section-features-1';
import { SectionSliderProjects } from "../../../components/section-slider-projects/section-slider-projects";
import { ProjectsService } from '../../../services/projects.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Projects } from '../../../interfaces/projects';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [HomeMainHeader, SectionWelcome, SectionFeatures1, SectionGeneralSolutions,
    SectionSliderProjects, SectionSliderProjects],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  //SEO Injects
  meta = inject(Meta);
  title = inject(Title)
  //
  pojectsService = inject(ProjectsService)
  private destroyRef = inject(DestroyRef);
  projects = signal<Projects[]>([])
  loading: boolean = false;
  constructor() {

  }
  ngOnInit() {
    this.setSeoTags()
    this.loading = true

    this.pojectsService.getAllProjetcs().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (data) => {
        this.loading = false
        this.projects.set(data as Projects[])

      },
      error: (error) => {
        console.error('Error fetching projects:', error);
        this.loading = false

      }
    });
  }
  //SEO
  setSeoTags() {
    this.title.setTitle('Zencode Developers - Desarrollo de Software a Medida en Orlando');
    this.meta.addTags([
      { name: 'description', content: 'Desarrollo de aplicaciones móviles y de escritorio en Orlando. Software a medida para empresas hispanohablantes y soluciones tecnológicas adaptadas a tu negocio.' },
      { name: 'keywords', content: 'desarrollo de software Orlando, apps móviles Orlando, software a medida, programadores Orlando, Zencode Developers' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Zencode Developers - Desarrollo de Software a Medida en Orlando' },
      { property: 'og:description', content: 'Creamos software personalizado, apps móviles y de escritorio para negocios en Orlando. Servicio en español e inglés.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://zencodedev.com/' },
      { property: 'og:image', content: 'https://zencodedev.com/img/logos/logo-dark.png' },
    ]);
  }
}
