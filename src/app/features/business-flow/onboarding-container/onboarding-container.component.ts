import { Component, signal, computed, ChangeDetectorRef } from '@angular/core';
import { NgClass, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { BusinessFlowService } from '../business-flow.service';
import { ProgressHeaderComponent } from '../../../shared/progress-header/progress-header.component';
import { PreparationComponent } from '../components/preparation/preparation.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SelectCompanyComponent } from '../components/select-company/select-company.component';
import { DocumentCreationComponent } from '../components/document-creation/document-creation.component';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';
import { CompletionComponent } from '../components/completion/completion.component';

@Component({
  selector: 'app-onboarding-container',
  standalone: true,
  imports: [
    ProgressHeaderComponent,
    PreparationComponent,
    SignInComponent,
    SelectCompanyComponent,
    DocumentCreationComponent,
    ConfirmationComponent,
    CompletionComponent,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgClass,
  ],
  templateUrl: './onboarding-container.component.html',
  styleUrl: './onboarding-container.component.css',
})
export class OnboardingContainerComponent {
  // Estado actual del flujo
  currentStep = signal<
    | 'preparation'
    | 'sign-in'
    | 'select-company'
    | 'confirmation'
    | 'document-creation'
    | 'completion'
  >('preparation');

  isLoginFullscreen = false;

  constructor(
    private businessFlow: BusinessFlowService,
    private cdr: ChangeDetectorRef
  ) {}

  // Avanza al siguiente paso
  goTo(
    step:
      | 'preparation'
      | 'sign-in'
      | 'select-company'
      | 'confirmation'
      | 'document-creation'
      | 'completion'
  ) {
    this.currentStep.set(step);

    const progress = this.calculateProgress(step);
    this.businessFlow.setStep(step);
    this.businessFlow.setProgress(progress);

    if (step !== 'sign-in') {
      this.isLoginFullscreen = false;
    }

    this.cdr.detectChanges();
  }

  // ✅ Progreso basado SOLO en pasos completados (no el actual)
  private calculateProgress(step: string): number {
    const steps = [
      'preparation',
      'sign-in',
      'select-company',
      'confirmation',
      'document-creation',
      'completion',
    ];

    const index = steps.indexOf(step);

    // La barra refleja el paso anterior (el último completado)
    const completedIndex = Math.max(0, index - 1);

    // Calcular porcentaje en base a pasos completados
    const percent = (completedIndex / (steps.length - 1)) * 100;
    return percent;
  }

  // ✅ Índice del último paso completado (para puntos de la barra)
  getCurrentStepIndex = computed(() => {
    const steps = [
      'preparation',
      'sign-in',
      'select-company',
      'confirmation',
      'document-creation',
      'completion',
    ];

    const index = steps.indexOf(this.currentStep());
    return Math.max(0, index - 1);
  });

  previousStep(): void {
    const steps: Array<
      | 'preparation'
      | 'sign-in'
      | 'select-company'
      | 'confirmation'
      | 'document-creation'
      | 'completion'
    > = [
      'preparation',
      'sign-in',
      'select-company',
      'confirmation',
      'document-creation',
      'completion',
    ];

    const index = steps.indexOf(this.currentStep());
    if (index > 0) {
      const prevStep = steps[index - 1];
      this.currentStep.set(prevStep);
      this.cdr.detectChanges();
    }
  }

  onLoginFormChange(isFull: boolean): void {
    this.isLoginFullscreen = isFull;
  }
}
