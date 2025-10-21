import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css'],
})
export class BackButtonComponent {
  @Input() currentStep: string = '';
  @Output() goBack = new EventEmitter<void>();

  get showButton(): boolean {
    const hideOn = ['document-creation', 'confirmation', 'completion'];
    return !hideOn.includes(this.currentStep);
  }

  onBack(): void {
    this.goBack.emit();
  }
}
