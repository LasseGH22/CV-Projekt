import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, IntroComponent, ProjectsComponent, FooterComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CV-Projekt';

}
