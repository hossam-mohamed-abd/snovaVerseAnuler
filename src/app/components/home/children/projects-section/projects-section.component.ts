import { Component } from '@angular/core';
import { LanguageService } from '../../../../core/language';

@Component({
  selector: 'app-projects-section',
  imports: [],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
constructor(public langService: LanguageService) {}

get currentLang() {
  return this.langService.getLang();
}
}
