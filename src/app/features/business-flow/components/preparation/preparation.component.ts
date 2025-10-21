import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProgressHeaderComponent } from '../../../../shared/progress-header/progress-header.component';

@Component({
  selector: 'app-preparation',
  imports: [RouterLink, ProgressHeaderComponent],
  templateUrl: './preparation.component.html',
  styleUrl: './preparation.component.css',
})
export class PreparationComponent {
  @Output() next = new EventEmitter<void>();

  nextStep() {
    this.next.emit();
  }
}
