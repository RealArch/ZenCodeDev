import { Injectable, Injector } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AlertComponent } from '../../components/popups/alert.component/alert.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
constructor(private overlay: Overlay, private injector: Injector) {}

  show(type: 'success' | 'error' | 'warning' | 'info', message: string) {
    const overlayRef: OverlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        .global()
        .bottom('20px')
        .centerHorizontally(),
        
      hasBackdrop: false,
      panelClass: ['z-50']
    });

    const portal = new ComponentPortal(AlertComponent, null, this.createInjector({ type, message }));
    const componentRef = overlayRef.attach(portal);

    // Auto close after 3s
    setTimeout(() => {
      overlayRef.dispose();
    }, 3000);
  }

  private createInjector(data: any): Injector {
    return Injector.create({
      providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
      parent: this.injector
    });
  }
}
