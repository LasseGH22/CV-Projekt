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
        longDescription: "The game is a top-down factory builder with a unique twist involving spatial anomalies. The objective is to craft specific items to unlock new levels and ultimately escape. Players must leverage spatial anomalies to transport materials between dimensions.", 
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
          {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: "https://github.com/LasseGH22/Asteroids-game"},
        ],
        origin: { origin: "University", subject: "Component-based Software Engineering", grade: "7"}
      },
      {
        index: 3,
        title: "Bitcoin Tracker", 
        imgURL: "assets/ApiProject.png", 
        description: "Full stack web application providing real-time and historical data on Bitcoin.",
        longDescription: "Full stack web application for tracking bitcoin prices with a Java Spring Boot backend and vanilla HTML, CSS, and JavaScript frontend. Immediate data loading in the frontend is done via REST endpoints while real time updates uses a websocket connection.  For data persistence an embedded H2 database using JDBC is implemented.", 
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
        longDescription: "For our 4th Semester Project, my group and I were assigned to develop a management application for a virtual assembly line. This assembly line includes a Warehouse, AGV, and Assembly Station, each operating in its own Docker container. The Warehouse container communicates over SOAP, the AGV uses HTTP with REST, and the Assembly Station uses MQTT. The backend is constructed using the Spring framework, while the frontend is developed with Angular. An embedded H2 database is employed for data persistence.", 
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
        longDescription: "For our 3rd Semester Project, my group and I were assigned to develop an application for seamless integration with a brewery. The application is designed to execute specific commands and monitor processes through a user-friendly GUI. The backend is built in Java using the Spring framework, complemented by a fully vanilla frontend. A cloud-hosted PostgreSQL database on Supabase is utilized for data persistence.", 
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
        title: "Arne's Electronics Store", 
        imgURL: "assets/SEMPRO2.png", 
        description: "Shop module for a shared e-commerce platform.",
        longDescription: "For this project, all groups were collectively tasked with creating a fully functional e-commerce platform. My group was responsible for developing the shop module. We built our shop module using plain Java for the backend and JavaFX for the frontend. The only successful integration between modules was our shop module and the PIM module.", 
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
        description: "Educational game teaching about marine pollution.",
        longDescription: "Skipper Skrald is an educational game built around FN's Global Goals nr. 14, Life Below Water. The goal of the game is to educate people on the impacts of marine pollution. The game is built in plain Java with JavaFX as the frontend / GUI.", 
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
