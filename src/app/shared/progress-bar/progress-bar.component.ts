import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent {
  @Input() currentStepIndex = 0;

  steps = [
    'Preparation',
    'Sign In',
    'Select Company',
    'Confirmation',
    'Document Creation',
    'Completion',
  ];

  displayPercent = 0;
  private previousPercent = 0;

  private targetPercentFromIndex(idx: number): number {
    const total = this.steps.length - 1;
    return (idx / total) * 100;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('currentStepIndex' in changes) {
      const target = this.targetPercentFromIndex(this.currentStepIndex);

      // Mantén el valor anterior y anima tanto hacia adelante como hacia atrás
      this.previousPercent = this.displayPercent;

      // Pequeño delay para permitir que el navegador renderice el estado anterior
      setTimeout(() => {
        this.displayPercent = target;
      }, 150);
    }
  }

  get percentLabel(): number {
    return Math.round(this.targetPercentFromIndex(this.currentStepIndex + 1));
  }
}
