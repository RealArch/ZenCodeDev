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

@Component({
  selector: 'app-home',
  imports: [HomeMainHeader, SectionWelcome, SectionFeatures1, SectionGeneralSolutions,
    SectionSliderProjects, SectionSliderProjects],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  pojectsService = inject(ProjectsService)
  private destroyRef = inject(DestroyRef);
  projects = signal<Projects[]>([])
  loading: boolean = false;
  constructor() {

  }
  ngOnInit() {
    this.loading = true

    this.pojectsService.getAllProjetcs().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (data) => {
        this.loading = false
        this.projects.set(data as Projects[])

        console.log(this.projects)
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
        this.loading = false

      }
    });
  }
}
