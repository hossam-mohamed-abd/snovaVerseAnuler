declare var bootstrap: any;
import { Component, inject, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../core/language';


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterLink]
})
export class NavbarComponent {

  currentLang: 'en' | 'ar' = 'en';
  private router = inject(Router);

  constructor(private langService: LanguageService) {
    this.langService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }


  closeNavbar() {
    const navbar = document.getElementById('mainNavbar');

    if (navbar && navbar.classList.contains('show')) {
      const collapse =
        bootstrap.Collapse.getInstance(navbar) ||
        new bootstrap.Collapse(navbar, { toggle: false });

      collapse.hide();
    }
  }


  toggleLang() {
    this.closeNavbar();

    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.langService.setLang(newLang);
  }


  navigateTo(section: string) {

    this.closeNavbar();

    const currentUrl = this.router.url;

    if (section === 'contact') {
      this.router.navigate(['/home/contact-us']);
      return;
    }

    if (
      currentUrl.includes('/home/vr-service') ||
      currentUrl.includes('/home/AR&AI-service') ||
      currentUrl.includes('/home/metaverse-service') ||
      currentUrl.includes('/home/contact-us')
    ) {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => this.scrollToSection(section), 200);
      });
      return;
    }

    if (currentUrl.includes('/home') || currentUrl === '/') {
      this.scrollToSection(section);
      return;
    }

    this.router.navigate(['/home']).then(() => {
      setTimeout(() => this.scrollToSection(section), 200);
    });
  }


  private scrollToSection(sectionId: string) {
    setTimeout(() => {
      const element = document.getElementById(`section-${sectionId}`);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }


  @HostListener('window:scroll')
  onScroll() {
    this.closeNavbar();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const navbar = document.getElementById('mainNavbar');
    const toggler = document.querySelector('.navbar-toggler');

    if (
      navbar &&
      navbar.classList.contains('show') &&
      !navbar.contains(event.target as Node) &&
      !toggler?.contains(event.target as Node)
    ) {
      this.closeNavbar();
    }
  }
}