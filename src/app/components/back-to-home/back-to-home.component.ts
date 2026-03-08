import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageLoader } from '../../core/page-loader';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-back-to-home',
  imports: [RouterLink, LandingPageComponent],
  templateUrl: './back-to-home.component.html',
  styleUrl: './back-to-home.component.css',
})
export class BackToHomeComponent extends PageLoader {
  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }
}
