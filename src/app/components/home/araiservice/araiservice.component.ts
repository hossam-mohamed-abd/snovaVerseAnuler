import { Component } from '@angular/core';
import { LanguageService } from '../../../core/language'
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-araiservice',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './araiservice.component.html',
  styleUrl: './araiservice.component.css',
})
export class ARAIServiceComponent {
  constructor(public langService: LanguageService) { }

  get currentLang() {
    return this.langService.getLang();
  }
}
