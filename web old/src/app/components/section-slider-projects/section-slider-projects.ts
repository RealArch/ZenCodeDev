import {
  afterNextRender,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,

  ElementRef,

  Input,
  ViewChild,

} from '@angular/core';
import { isPlatformBrowser, JsonPipe, NgFor, NgStyle } from '@angular/common';

import { Projects } from '../../interfaces/projects';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-section-slider-projects',
  imports: [NgStyle],
  templateUrl: './section-slider-projects.html',
  styleUrl: './section-slider-projects.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SectionSliderProjects {
  @Input() projects: Projects[] = [];
  // Obtenemos una referencia al contenedor del swiper en la plantilla.
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  constructor() {
    // afterNextRender se ejecuta UNA SOLA VEZ en el CLIENTE después del renderizado inicial.
    // Es el lugar perfecto para inicializar librerías que dependen del DOM.
    afterNextRender(() => {
      // Ahora estamos seguros de que este código se ejecuta en el navegador.
      const swiper = new Swiper(this.swiperContainer.nativeElement, {
        // Tu configuración de Swiper aquí
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      });
    });
  }

}
