import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

interface Language {
  code: string;
  name: string;
}

@Component({
  selector: 'app-language-selector',
  imports: [NgIf, NgClass, NgFor],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
  standalone: true,
})
export class LanguageSelectorComponent {
  @Input() theme: 'light' | 'dark' = 'light'; // 🔹 Cambia colores según header/footer

  languages: Language[] = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
  ];

  currentLang = signal<Language>(this.languages[0]);
  showDropdown = signal(false);

  toggleDropdown(): void {
    this.showDropdown.update((v) => !v);
  }

  selectLanguage(lang: Language): void {
    this.currentLang.set(lang);
    this.showDropdown.set(false);
  }

  get buttonClasses(): string {
    return this.theme === 'dark'
      ? 'border border-white/60 text-white bg-transparent hover:bg-white/10'
      : 'border border-[#DDDEE1] text-[#343637] bg-white hover:bg-gray-50';
  }
}
