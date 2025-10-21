// sign-in.component.ts
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  @Output() showLoginFormChange = new EventEmitter<boolean>();

  showLoginForm = false;
  signInForm!: FormGroup;
  isLoading = false;
  errorMessage = '';
  showPassword = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  toggleLogin(): void {
    this.showLoginForm = true;
    this.showLoginFormChange.emit(true);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.errorMessage = '';

    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      const { id, password } = this.signInForm.value;
      if (id && password) {
        this.next.emit(); // avanzar al siguiente paso
      } else {
        this.errorMessage = 'Invalid credentials.';
      }
    }, 1000);
  }
}
