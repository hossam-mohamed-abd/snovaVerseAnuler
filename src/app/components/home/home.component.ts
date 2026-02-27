import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { LanguageService } from '../../core/language';
import { RouterLink } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";
import { AboutSectionComponent } from "./children/about-section/about-section.component";
import { ServicesSectionComponent } from "./children/services-section/services-section.component";
import { ProjectsSectionComponent } from "./children/projects-section/projects-section.component";
import { ProcessSectionComponent } from "./children/process-section/process-section.component";
import { IndustriesSectionComponent } from './children/industries-section/industries-section.component';
import { CtaSectionComponent } from './children/cta-section/cta-section.component';
import { WhyusSectionComponent } from './children/whyus-section/whyus-section.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, RouterLink, FooterComponent, AboutSectionComponent, ServicesSectionComponent, ProjectsSectionComponent, ProcessSectionComponent,IndustriesSectionComponent,CtaSectionComponent,WhyusSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public langService: LanguageService) {}

  get currentLang() {
    return this.langService.getLang();
  }

  // ✅ دالة التمرير للمشاريع
  scrollToProjects() {
    const element = document.getElementById('section-projects');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      // تأثير highlight (اختياري)
      element.classList.add('section-highlight');
      setTimeout(() => element.classList.remove('section-highlight'), 2000);
    }
  }
}