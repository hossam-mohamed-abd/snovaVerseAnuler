import { Component } from '@angular/core';
import { LanguageService } from '../../../../core/language';

@Component({
  selector: 'app-whyus-section',
  imports: [],
  templateUrl: './whyus-section.component.html',
  styleUrl: './whyus-section.component.css',
})
export class WhyusSectionComponent {
constructor(public langService: LanguageService) {}

get currentLang() {
  return this.langService.getLang();
}
}
