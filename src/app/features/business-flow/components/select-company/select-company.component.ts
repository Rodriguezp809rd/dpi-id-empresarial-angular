import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessFlowService } from '../../business-flow.service';

interface Company {
  name: string;
  rnc: string;
  mercantile: string;
  position: string;
  validity: string;
  active: boolean;
}

@Component({
  selector: 'app-select-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.css'],
})
export class SelectCompanyComponent {
  @Output() next = new EventEmitter<void>();

  constructor(private businessFlow: BusinessFlowService) {}

  companies: Company[] = [
    {
      name: 'Tecnología Avanzada S.R.L.',
      rnc: '131-12345-6',
      mercantile: '12345',
      position: 'Presidente',
      validity: '131-12345-6',
      active: true,
    },
    {
      name: 'Servicios Digitales EIRL',
      rnc: '131-67890-1',
      mercantile: '67890',
      position: 'Gerente General',
      validity: '2025-06-30',
      active: true,
    },
    {
      name: 'Consultoría Empresarial S.A.',
      rnc: '131-54321-9',
      mercantile: '54321',
      position: 'Administrador',
      validity: '2024-01-15',
      active: false,
    },
  ];

  selectedCompany: Company | null = null;

  selectCompany(company: Company): void {
    if (!company.active) return;
    this.selectedCompany = company;
    this.businessFlow.setCompany(company);
  }

  continue(): void {
    if (this.selectedCompany) {
      this.next.emit();
    }
  }
}
