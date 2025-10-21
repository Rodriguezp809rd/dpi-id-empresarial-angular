import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '../back-button/back-button.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-progress-header',
  standalone: true,
  imports: [CommonModule, BackButtonComponent, ProgressBarComponent],
  templateUrl: './progress-header.component.html',
})
export class ProgressHeaderComponent {
  @Input() currentStepIndex = 0;
  @Input() currentStep: string = '';
  @Output() goBack = new EventEmitter<void>();

  steps = [
    'Preparación',
    'Iniciar sesión',
    'Selección de Empresa',
    'Confirmación',
    'Creación de Documentos',
    'Finalización',
  ];

  get showBackButton(): boolean {
    const hideOn = ['preparation', 'completion'];
    return !hideOn.includes(this.currentStep);
  }

  onBack(): void {
    this.goBack.emit();
  }
}
