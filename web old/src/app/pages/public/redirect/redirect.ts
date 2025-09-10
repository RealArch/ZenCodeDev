import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-redirect',
  imports: [],
  templateUrl: './redirect.html',
  styleUrl: './redirect.scss'
})
export class Redirect {
  router = inject(Router);
  route = inject(ActivatedRoute);
  platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const code = this.route.snapshot.paramMap.get('code');
      const redirectMap: Record<string, string> = {
        'card_qr': 'https://zencodedev.com',

      };
      console.log('hola')
      const redirectUrl = redirectMap[code || ''] || '/';
      console.log(redirectUrl)
      window.location.href = redirectUrl; // o this.router.navigateByUrl si es dentro de tu app
    }

  }
}
