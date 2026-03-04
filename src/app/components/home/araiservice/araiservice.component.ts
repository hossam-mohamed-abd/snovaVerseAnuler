import { Component, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from '../../../core/language';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { PageLoader } from '../../../core/page-loader';
import { LandingPageComponent } from '../../landing-page/landing-page.component';

@Component({
  selector: 'app-araiservice',
  imports: [NavbarComponent, RouterLink, LandingPageComponent],
  templateUrl: './araiservice.component.html',
  styleUrl: './araiservice.component.css',
})
export class ARAIServiceComponent extends PageLoader {

  constructor(
    public langService: LanguageService,
    cdr: ChangeDetectorRef
  ) {
    super(cdr);
  }

  get currentLang() {
    return this.langService.getLang();
  }

}