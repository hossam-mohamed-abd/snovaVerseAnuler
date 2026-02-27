import { Component } from '@angular/core';
import { LanguageService } from '../../../../core/language';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-section',
  imports: [LottieComponent,RouterLink],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css',
})
export class ServicesSectionComponent {
constructor(public langService: LanguageService) {}

get currentLang() {
  return this.langService.getLang();
}

metaOptions: AnimationOptions = {
  path: '/assets/wired-outline-2459-metaverse-hover-roll.json',
  loop: true,
  autoplay: true
};

vrOptions: AnimationOptions = {
  path: '/assets/wired-outline-474-vr-glasses-gogle-hover-pinch-1.json',
  loop: true,
  autoplay: true
};

aiOptions: AnimationOptions = {
  path: '/assets/wired-outline-2600-digital-in-reveal-3.json',
  loop: true,
  autoplay: true
};
}
