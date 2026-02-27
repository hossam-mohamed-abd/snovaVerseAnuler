import { Component } from '@angular/core';
import { LanguageService } from '../../core/language'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  constructor(public langService: LanguageService) {}

  get currentLang() {
    return this.langService.getLang();
  }

  activeOption: string | null = null;
  isSubmitting: boolean = false;
  showSuccess: boolean = false;

  formData = {
    name: '',
    email: '',
    service: '',
    message: ''
  };

  toggleOption(option: string) {
    this.activeOption = this.activeOption === option ? null : option;
  }

  openWhatsApp() {
    const phone = '20123456789';
    const message = this.currentLang === 'en'
      ? 'Hello, I would like to inquire about your services.'
      : 'مرحباً، أود الاستفسار عن خدماتكم.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  }

  openCalendar() {
    window.open('https://calendly.com/hossam545mohamed/30min', '_blank');
  }

  async onFormSubmit(event: Event) {  
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    this.isSubmitting = true;
    
    try {
      const response = await fetch('https://formspree.io/f/mzdavrrz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        
        this.showSuccess = true;
        this.formData = { name: '', email: '', service: '', message: '' };
        
        
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      } else {
        
        const data = await response.json();
        console.error('Formspree error:', data);
        alert(this.currentLang === 'en' 
          ? 'Something went wrong. Please try again.' 
          : 'حدث خطأ. حاول مرة أخرى.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert(this.currentLang === 'en' 
        ? 'Network error. Please check your connection.' 
        : 'خطأ في الشبكة. تحقق من اتصالك.');
    } finally {
      this.isSubmitting = false;
    }
  }
}