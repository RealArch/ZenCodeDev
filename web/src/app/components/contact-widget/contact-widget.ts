import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-widget',
  imports: [],
  templateUrl: './contact-widget.html',
  styleUrl: './contact-widget.scss'
})
export class ContactWidget {

  isOpen = false;

  toggleWidget() {
    this.isOpen = !this.isOpen;
  }
}
