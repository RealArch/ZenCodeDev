import { inject, Injectable } from '@angular/core';
import { addDoc, collection,  Firestore,  getFirestore } from '@angular/fire/firestore';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailerService {
  firestore = inject(Firestore)

  sendMail(name: string, lastname:string, email: string, phone: string, message: string) {
    var ref = collection(getFirestore(), 'mail')
    return addDoc(ref, {
      to: environment.sendTo,
      replyTo: email,
      message: {
        subject: 'Formulario Ra-code',
        html: `
        <strong>Nombre:</strong> ${name} <br>
        <strong>Nombre:</strong> ${lastname} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Phone:</strong> ${phone}<br><br>
        <strong>Mensaje:</strong> "${message}"
        `        
      },
    })
  }
}
