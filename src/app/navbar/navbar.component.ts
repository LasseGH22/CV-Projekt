import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scrollToElement(id: string): void {
    if (id === "about") {
      document.getElementById("about")?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
