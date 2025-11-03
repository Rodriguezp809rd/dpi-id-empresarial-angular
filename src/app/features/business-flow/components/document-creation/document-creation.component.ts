import { Component, EventEmitter, Output } from '@angular/core';
import { ProgressHeaderComponent } from '../../../../shared/progress-header/progress-header.component';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-document-creation',
  imports: [ProgressHeaderComponent, NgClass, NgIf, NgFor, NgStyle],
  templateUrl: './document-creation.component.html',
  styleUrl: './document-creation.component.css',
})
export class DocumentCreationComponent {
  isLoading = true;
  progress = 0;
  @Output() next = new EventEmitter<void>();
  documents = [
    {
      name: 'Registro Nacional del Contribuyente (RNC)',
      issuer: 'DGII',
      loaded: false,
    },
    { name: 'Registro de nombre comercial', issuer: 'ONAPI', loaded: false },
    {
      name: 'Estatutos de la empresa',
      issuer: 'Cámara de Comercio',
      loaded: false,
    },
    { name: 'Acta constitutiva', issuer: 'Cámara de Comercio', loaded: false },
    {
      name: 'Acta de cuentas bancarias',
      issuer: 'Cámara de Comercio',
      loaded: false,
    },
  ];

  ngOnInit(): void {
    // Simula un proceso inicial de carga antes de mostrar documentos
    setTimeout(() => {
      this.isLoading = false;
      this.simulateDocumentLoading();
    }, 2000);
  }

  simulateDocumentLoading(): void {
    this.documents.forEach((doc, index) => {
      setTimeout(() => {
        doc.loaded = true;
        this.progress = Math.round(
          (this.documents.filter((d) => d.loaded).length /
            this.documents.length) *
            100
        );
      }, 1000 * (index + 1));
    });
  }
  confirmAndContinue(): void {
    this.next.emit();
  }
}
