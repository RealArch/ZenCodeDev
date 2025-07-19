import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-footer',
  imports: [RouterLink],
  templateUrl: './main-footer.html',
  styleUrl: './main-footer.scss'
})
export class MainFooter {

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: "instant" });
    }
}
