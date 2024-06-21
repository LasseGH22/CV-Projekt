import { Component } from '@angular/core';
import { TechnologiesComponent } from '../technologies/technologies.component';


@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [TechnologiesComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

}