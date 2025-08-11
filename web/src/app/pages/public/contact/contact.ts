import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PageHeader } from '../../../components/page-header/page-header';
import { MailerService } from '../../../services/mailer.service'
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, PageHeader],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  //SEO Injects
  meta = inject(Meta);
  title = inject(Title)
  //
  // Using signals for reactive state, common in zoneless applications
  background = signal('img/contact_background_ra-code.webp');
  breadcrumb = signal([
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Contacto',
      link: '/contact'
    }
  ]);
  sending = signal(false); // Using signal for sending state
  contactForm: FormGroup;

  // Inject services directly using inject() for Angular 16+
  private fb = inject(FormBuilder);
  private apiMailer = inject(MailerService);
  // private toastService = inject(ToastService); // Replaced MatSnackBar
  // private modalService = inject(ModalService); // Replaced PopupsService

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
    });
  }

  ngOnInit(): void {
    this.setSeoTags()

    // No specific initialization logic needed here for this component
  }

  sendMail(form: any): void {
    this.sending.set(true); // Update signal
    this.apiMailer.sendMail(form.name, form.lastname, form.email, form.phone, form.description)
      .then(() => {
        // Use custom modal service
        // this.modalService.openModal(
        //   '¡Muy bien!',
        //   'Mensaje enviado con éxito. Revisaremos tu solicitud y la responderemos lo más pronto posible.'
        // );
        this.contactForm.reset();
      }).catch(err => {
        console.error(err);
        // Use custom toast service
        // this.toastService.showToast('Ocurrió un problema al enviar el mensaje. Por favor intenta nuevamente.', 'error');
      }).finally(() => {
        this.sending.set(false); // Update signal
      });
  }

  setSeoTags() {
    this.title.setTitle('Contacto - Zencode | Desarrollo de Software en Orlando');
    this.meta.addTags([
      { name: 'description', content: 'Contáctanos para desarrollar tu aplicación móvil o software a medida en Orlando. Servicio en español e inglés. Respuesta rápida garantizada.' },
      { name: 'keywords', content: 'contacto Zencode Developers, contratar programador Orlando, desarrolladores software Orlando, apps móviles Orlando' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Contacto - Zencode Developers | Desarrollo de Software en Orlando' },
      { property: 'og:description', content: 'Habla con nuestro equipo de desarrollo y lleva tu idea al siguiente nivel. Servicio en Orlando y alrededores.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://zencodedev.com/contact' },
      { property: 'og:image', content: 'https://zencodedev.com/img/logos/logo-dark.png' },
    ]);
  }
}
