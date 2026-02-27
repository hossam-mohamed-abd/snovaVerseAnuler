import { Component } from '@angular/core';
import { LanguageService } from '../../../../core/language';

@Component({
  selector: 'app-industries-section',
  imports: [],
  templateUrl: './industries-section.component.html',
  styleUrl: './industries-section.component.css',
})
export class IndustriesSectionComponent {
constructor(public langService: LanguageService) {}

get currentLang() {
  return this.langService.getLang();
}
}
