import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language';
import { Router, RouterLink } from '@angular/router'; // ✅ استيراد Router

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink], // ✅ مش محتاج RouterLink لأنه هيستخدم دوال
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private router = inject(Router); // ✅ حقن Router
  
  constructor(public langService: LanguageService) {}

  get currentLang() {
    return this.langService.getLang();
  }
  
  currentYear: number = new Date().getFullYear();

  // ✅ دالة التمرير للأقسام
  scrollToSection(sectionId: string) {
    // لو احنا مش في الصفحة الرئيسية
    if (!this.router.url.includes('/home')) {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          this.scrollToElement(sectionId);
        }, 100);
      });
    } else {
      // لو احنا في الصفحة الرئيسية
      this.scrollToElement(sectionId);
    }
  }

  private scrollToElement(sectionId: string) {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
}