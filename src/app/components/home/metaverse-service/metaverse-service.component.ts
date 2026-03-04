import { Component, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from '../../../core/language';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterLink } from "@angular/router";
import { PageLoader } from '../../../core/page-loader';
import { LandingPageComponent } from '../../landing-page/landing-page.component';

@Component({
  selector: 'app-metaverse-service',
  imports: [NavbarComponent, RouterLink,LandingPageComponent],
  templateUrl: './metaverse-service.component.html',
  styleUrl: './metaverse-service.component.css',
})
export class MetaverseServiceComponent extends PageLoader {

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