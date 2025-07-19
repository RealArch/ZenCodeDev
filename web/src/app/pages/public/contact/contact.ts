import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PageHeader } from '../../../components/page-header/page-header';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, PageHeader],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
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
  // private apiMailer = inject(MailerService);
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
    // No specific initialization logic needed here for this component
  }

  sendMail(form: any): void {
    this.sending.set(true); // Update signal
    // this.apiMailer.sendMail(form.name, form.lastname, form.email, form.phone, form.description)
    //   .then(() => {
    //     // Use custom modal service
    //     this.modalService.openModal(
    //       '¡Muy bien!',
    //       'Mensaje enviado con éxito. Revisaremos tu solicitud y la responderemos lo más pronto posible.'
    //     );
    //     this.contactForm.reset();
    //   }).catch(err => {
    //     console.error(err);
    //     // Use custom toast service
    //     this.toastService.showToast('Ocurrió un problema al enviar el mensaje. Por favor intenta nuevamente.', 'error');
    //   }).finally(() => {
    //     this.sending.set(false); // Update signal
    //   });
  }
}
