import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  //SEO Injects
  meta = inject(Meta);
  title = inject(Title)
  //
  ngOnInit() {
    this.setSeoTags()
  }

  setSeoTags() {
    this.title.setTitle('Servicios de Desarrollo de Software en Orlando - Zencode Developers');
    this.meta.addTags([
      { name: 'description', content: 'Ofrecemos desarrollo de aplicaciones móviles, software a medida, integración de sistemas y soluciones tecnológicas personalizadas para empresas en Orlando.' },
      { name: 'keywords', content: 'servicios desarrollo software Orlando, crear app móvil Orlando, software empresarial Orlando, Zencode developers' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Servicios de Desarrollo de Software en Orlando - Zencode' },
      { property: 'og:description', content: 'Soluciones en apps móviles, software a medida y desarrollo empresarial en Orlando. Expertos en innovación y tecnología.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://zencodedev.com/services' },
      { property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/zencodedev.firebasestorage.app/o/media%2Flogos%2Flogo-dark.svg?alt=media&token=783bf289-adb5-4a04-bbb1-94bcf7fcdffb' },
    ]);
  }

}
