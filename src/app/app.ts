import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackToHomeComponent } from './components/back-to-home/back-to-home.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet  ,BackToHomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('snovaVerseAnuler');
}
