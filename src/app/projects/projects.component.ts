import { Component, OnInit, HostListener } from '@angular/core';
import { Projects } from '../models/project';
import { Technologies } from '../models/technologies';
import { TechnologiesService } from '../services/technologies.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  public technologies: Technologies[] = [];
  public projects: Projects[] = [];
  currentItemIndex: number = 0;
  
  constructor(private technologiesService: TechnologiesService) { }

  ngOnInit(): void {
    this.technologies = this.technologiesService.getTechnologies();
    this.initProjects();
    window.addEventListener('keydown', this.handleKeyboardEvent.bind(this));
  }

  openModal(index: number): void {
    const modal = document.getElementById(`modal_${index}`) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }
  
  scrollToItem(itemId: string): void {
    const itemElement = document.getElementById(itemId);
    if (itemElement) {
      itemElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  }

  navigate(direction: 'next' | 'prev'): void {
    const totalItems = this.projects.length;
    if (direction === 'next') {
      this.currentItemIndex = (this.currentItemIndex + 1) % totalItems;
    } else {
      this.currentItemIndex = (this.currentItemIndex - 1 + totalItems) % totalItems;
    }
    const itemId = `carouselItem-${this.currentItemIndex}`;
    console.log(`Scrolling to item with ID: ${itemId}`); // Debugging line
    this.scrollToItem(itemId);
  }

  handleKeyboardEvent(event: KeyboardEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.key === 'ArrowRight') {
      this.navigate('next');
    } else if (event.key === 'ArrowLeft') {
      this.navigate('prev');
    }
  }

  initProjects(): void {
    this.projects = [
      {
        index: 0,
        title: "Flipside Factories", 
        imgURL: "assets/FlipsideFactories.png", 
        description: "Winner of a 24 hour Game Jam hosted by SDU's association for software students, Enigma.", 
        longDescription: "The game is a top down factory builder with its twist being spatial anomalies. The objective is to craft certain items in order to unlock new levels and eventually escape. The player has to utilize spatial anomalies to move materials between dimensions.", 
        technologies: [
          this.technologies[1],
          this.technologies[11],
          this.technologies[20]
        ], 
        referrals: [
          {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: "https://github.com/VinciDa33/Enigma-Game-Jam"},
          {name: "Itch-Io", imgURL: this.technologies[16].iconURL, redirectURL: "https://vincida.itch.io/flipside-factories"}
        ],
        origin: { origin: "Enigma Game Jam", accomplishment: "Winner" }
      },
      {
        index: 1,
        title: "Clicker Game", 
        imgURL: "assets/ClickerGame.png", 
        description: "A very simple incremental clicker game.", 
        longDescription: "This game marked my initial experience with the Unity game engine and my first 'real' exposure to C# programming. The game is a basic incremental clicker game where players earn points by clicking, which they can then use to purchase generators and upgrades to accelerate their point accumulation.", 
        technologies: [
          this.technologies[1],
          this.technologies[11]
        ], 
        referrals: [
          {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: ""},
        ],
        origin: { origin: "Hobby Project"}
      },
      {
        index: 2,
        title: "Asteroids", 
        imgURL: "assets/Asteroids.png", 
        description: "A component-based game of Asteroids using JPMS.", 
        longDescription: "This project is a rendition of the classic arcade game of Asteroids, but with a component-based architecture achieved by utilizing JPMS. The game is built using JavaFX for the UI and Java for the backend. The Spring framework is used in addition to build and run microservices for the game.", 
        technologies: [
          this.technologies[0],
          this.technologies[7],
          this.technologies[8],
          this.technologies[20]
        ], 
        referrals: [
          {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: "https://github.com/LasseGH22/AsteroidsFX/tree/LasseMain"},
        ],
        origin: { origin: "University", subject: "Component-based Software Engineering", grade: "7"}
      },
      {
        index: 3,
        title: "Bitcoin Tracker", 
        imgURL: "assets/ApiProject.png", 
        description: "Full stack web application providing real-time and historical data on Bitcoin.",
        longDescription: "Full stack web application for tracking bitcoin prices with a Java Spring Boot backend and vanilla HTML, CSS and JavaScript frontend. For data persistence an embedded H2 database using JDBC is implemented.", 
        technologies: [
          this.technologies[0],
          this.technologies[2],
          this.technologies[3],
          this.technologies[5],
          this.technologies[8],
          this.technologies[13],
          this.technologies[20]
        ], 
        referrals: [
          {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: "https://github.com/LasseGH22/ApiProject"},
        ],
        origin: { origin: "University", subject: "Softwaretechnology in cyber-physical systems", grade: "7" }
      },
      {
        index: 4,
        title: "Drone Dudes", 
        imgURL: "assets/SEMPRO4.png", 
        description: "Full-stack management of an assembly line with multiple communication protocols",
        longDescription: "???", 
        technologies: [
          this.technologies[0],
          this.technologies[2],
          this.technologies[4],
          this.technologies[6],
          this.technologies[8],
          this.technologies[9],
          this.technologies[12],
          this.technologies[13],
          this.technologies[20]
        ], 
        referrals: [
          {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: "https://github.com/DroneDudes/SEMPRO4"},
        ],
        origin: { origin: "University", subject: "4th. Semester Project", grade: "12" }
      },
      {
        index: 5,
        title: "Level Up Library", 
        imgURL: "assets/LevelUpLibrary.png", 
        description: "Game library centered on user reviews to determine game rankings.",
        longDescription: "Game library with a focus on user reviews to determine game rankings. The project is built using Laravel and PHP for the backend and Blade for the frontend. The project also utilizes a cloud hosted PostgreSQL database for data persistence.", 
        technologies: [
          this.technologies[18],
          this.technologies[2],
          this.technologies[3],
          this.technologies[5],
          this.technologies[10],
          this.technologies[19],
          this.technologies[20]
        ], 
        referrals: [
          {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: "https://github.com/msundby/Level-Up-Library-Webtechnologies-SDU"},
        ],
        origin: { origin: "University", subject: "Web Technologies", grade: "7" }
      },
      {
        index: 6,
        title: "Beer Bros", 
        imgURL: "assets/SEMPRO3.png", 
        description: "Full-stack management application for a brewery.",
        longDescription: "???", 
        technologies: [
          this.technologies[0],
          this.technologies[2],
          this.technologies[3],
          this.technologies[5],
          this.technologies[8],
          this.technologies[14],
          this.technologies[12],
          this.technologies[20]
        ], 
        referrals: [
          {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: "https://github.com/BeerBrewersSem3/SEMPRO3"},
        ],
        origin: { origin: "University", subject: "3rd. Semester Project", grade: "12" }
      },
      {
        index: 7,
        title: "SEMPRO2", 
        imgURL: "assets/SEMPRO2.png", 
        description: "Shop module for a shared e-commerce platform.",
        longDescription: "???", 
        technologies: [
          this.technologies[0],
          this.technologies[7],
          this.technologies[20]
        ], 
        referrals: [
          {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: ""},
        ],
        origin: { origin: "University", subject: "2nd. Semester Project", grade: "02" }
      },
      {
        index: 8,
        title: "Skipper Skrald", 
        imgURL: "assets/SEMPRO1.png", 
        description: "SEMPRO1",
        longDescription: "???", 
        technologies: [
          this.technologies[0],
          this.technologies[7],
          this.technologies[20]
        ], 
        referrals: [
          {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: ""},
        ],
        origin: { origin: "University", subject: "1st. Semester Project", grade: "7" }
      },
      {
        index: 9,
        title: "Personal Portfolio", 
        imgURL: "assets/Portfolio.png", 
        description: "Personal website showcasing explored technologies, projects and skills.",
        longDescription: "This is the website u are currently browsing. The website is built using Angular and TypeScript for the frontend and Tailwind CSS for styling.", 
        technologies: [
          this.technologies[2],
          this.technologies[4],
          this.technologies[6],
          this.technologies[9],
          this.technologies[20]
        ], 
        referrals: [
          {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: ""},
        ],
        origin: { origin: "Personal project" }
      },
    ]
  }
  
}
