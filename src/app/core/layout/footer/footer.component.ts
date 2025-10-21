import { Component } from '@angular/core';
import { LanguageSelectorComponent } from '../../../shared/language-selector/language-selector.component';

@Component({
  selector: 'app-footer',
  imports: [LanguageSelectorComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
