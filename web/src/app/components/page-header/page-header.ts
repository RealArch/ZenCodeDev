import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BreadcrumbItem {
  name: string;
  link: string;
}
@Component({
  selector: 'app-page-header',
  imports: [NgClass, NgStyle, RouterLink],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss'
})

export class PageHeader {

  @Input() title: string | undefined;
  @Input() breadcrumb: any;
  @Input() background: any;


}
