import { Component } from '@angular/core';
import { ProgressHeaderComponent } from '../../../../shared/progress-header/progress-header.component';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-completion',
  imports: [
    ProgressHeaderComponent,
    NgClass,
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './completion.component.html',
  styleUrl: './completion.component.css',
})
export class CompletionComponent {
  step = 1; // 1: QR, 2: Finalizado, 3: Valoración
  stars = Array(5).fill(0);
  rating = 0;
  hoverRating = 0;
  comment = '';

  goToStep(step: number) {
    this.step = step;
  }

  setRating(value: number) {
    this.rating = value;
  }

  showModal = false;

  submitFeedback() {
    console.log({
      rating: this.rating,
      comment: this.comment || '(sin comentario)',
    });

    // Simular envío y mostrar modal
    setTimeout(() => {
      this.showModal = true;
    }, 300);
  }

  returnToPortal() {
    this.showModal = false;
    // Aquí puedes redirigir, por ejemplo:
    window.location.href = '/'; // o Router.navigate(['/home'])
  }
}
