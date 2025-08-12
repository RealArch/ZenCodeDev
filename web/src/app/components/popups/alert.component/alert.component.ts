import { NgClass } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertData {
  type: AlertType;
  message: string;
}

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      class="alert shadow-lg animate-slide-in"
      [ngClass]="alertClassMap[data.type] || alertClassMap.info"
      style="min-width: 250px"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <span>{{ data.message }}</span>
    </div>
  `,
  styles: [`
    @keyframes slideIn {
      0% { transform: translateX(100%); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    .animate-slide-in {
      animation: slideIn 0.3s ease-out;
    }
  `]
})
export class AlertComponent {
  alertClassMap: Record<AlertType, string> = {
    success: 'alert-success',
    error: 'alert-error',
    warning: 'alert-warning',
    info: 'alert-info',
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: AlertData) { }
}
