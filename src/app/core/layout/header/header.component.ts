import { NgForOf, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { BackButtonComponent } from '../../../shared/back-button/back-button.component';
import { LanguageSelectorComponent } from '../../../shared/language-selector/language-selector.component';

interface Language {
  code: string;
  name: string;
}
@Component({
  selector: 'app-header',
  imports: [NgIf, NgForOf, BackButtonComponent, LanguageSelectorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // Available languages
  languages: Language[] = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
  ];

  // Current language (signal = reactive)
  currentLang = signal<Language>(this.languages[0]);

  // Dropdown visibility
  showDropdown = signal(false);

  toggleDropdown() {
    this.showDropdown.update((v) => !v);
  }

  selectLanguage(lang: Language) {
    this.currentLang.set(lang);
    this.showDropdown.set(false);
  }
}
