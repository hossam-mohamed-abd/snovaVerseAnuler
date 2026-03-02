import { Component } from '@angular/core';
import { LanguageService } from '../../../../core/language';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-projects-section',
  imports: [RouterLink],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  constructor(public langService: LanguageService) {}
  get currentLang() {
    return this.langService.getLang();
  }
}
