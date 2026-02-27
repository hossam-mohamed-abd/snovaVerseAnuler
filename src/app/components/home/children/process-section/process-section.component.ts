import { Component } from '@angular/core';
import { LanguageService } from '../../../../core/language';

@Component({
  selector: 'app-process-section',
  imports: [],
  templateUrl: './process-section.component.html',
  styleUrl: './process-section.component.css',
})
export class ProcessSectionComponent {
constructor(public langService: LanguageService) {}

get currentLang() {
  return this.langService.getLang();
}
}
