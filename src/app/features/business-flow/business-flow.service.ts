import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BusinessFlowService {
  private selectedCompany$ = new BehaviorSubject<any>(null);
  private progress$ = new BehaviorSubject<number>(0);
  private currentStep$ = new BehaviorSubject<string>('preparation');

  setCompany(company: any) {
    this.selectedCompany$.next(company);
  }

  getCompany() {
    return this.selectedCompany$.asObservable();
  }

  setProgress(value: number) {
    this.progress$.next(value);
  }

  getProgress() {
    return this.progress$.asObservable();
  }

  setStep(step: string) {
    this.currentStep$.next(step);
  }

  getStep() {
    return this.currentStep$.asObservable();
  }
}
