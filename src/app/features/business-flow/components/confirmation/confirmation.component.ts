import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessFlowService } from '../../business-flow.service';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  selectedCompany: any = null;

  constructor(private businessFlow: BusinessFlowService) {}

  ngOnInit(): void {
    this.businessFlow.getCompany().subscribe((company) => {
      this.selectedCompany = company;
    });
  }

  confirmAndContinue(): void {
    this.next.emit();
  }

  goBack(): void {
    this.back.emit();
  }
}
