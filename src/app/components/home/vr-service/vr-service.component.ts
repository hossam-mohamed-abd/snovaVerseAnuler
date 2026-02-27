import { Component } from '@angular/core';
import { LanguageService } from '../../../core/language';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterLink, Router } from '@angular/router'; // ✅ تأكد من Router هنا

@Component({
  selector: 'app-vr-service',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './vr-service.component.html',
  styleUrl: './vr-service.component.css',
})
export class VrServiceComponent {
  constructor(
    public langService: LanguageService,
    private router: Router // ✅ تأكد من حقن Router
  ) {}

  get currentLang() {
    return this.langService.getLang();
  }

  // ✅ دالة التوجيه
  goToProjects() {
    console.log('goToProjects clicked'); // للتأكد من أن الدالة بتنفذ
    
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('section-projects');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.log('Element section-projects not found');
        }
      }, 300);
    });
  }
}