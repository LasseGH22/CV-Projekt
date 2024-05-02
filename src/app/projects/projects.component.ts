import { Component } from '@angular/core';
import { Projects } from '../models/project';
import { Technologies } from '../models/technologies';
import { Referral } from '../models/referral';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  openModal(index: number): void {
    const modal = document.getElementById(`modal_${index}`) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }

  public technologies: Technologies[] = [
    {index: 0, name: "java", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", altText: "Java"},
    {index: 1, name: "cSharp", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-line.svg", altText: "C#"},
    {index: 2, name: "html", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", altText: "HTML"},
    {index: 3, name: "css", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", altText: "CSS"},
    {index: 4, name: "tailwind", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", altText: "Tailwind CSS"},
    {index: 5, name: "javascript", iconURL: "https://www.cdnlogo.com/logos/j/69/javascript.svg", altText: "JavaScript"},
    {index: 6, name: "typescript", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", altText: "TypeScript"},

    {index: 7, name: "javaFx", iconURL: "assets/JavaFX.png", altText: "JavaFX"},
    {index: 8, name: "javaSpring", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", altText: "Spring Boot"},
    {index: 9, name: "angular", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain.svg", altText: "Angular"},
    {index: 10, name: "laravel", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", altText: "Laravel"},

    {index: 11, name: "unity", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg", altText: "Unity"},
    {index: 12, name: "docker", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", altText: "Docker"},
    {index: 13, name: "sql", iconURL: "assets/database-icon.svg", altText: "SQL"},
    {index: 14, name: "postgresql", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", altText: "PostgreSQL"},

    {index: 15, name: "github", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", altText: "Github"},
    {index: 16, name: "itchIo", iconURL: "assets/Itch-Io.png", altText: "Itch.io"},
    {index: 17, name: "linkedIn", iconURL: "assets/LinkedIn.svg", altText: "LinkedIn"},

    {index: 18, name: "php", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg", altText: "PHP"},
    {index: 19, name: "supabase", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", altText: "Supabase"},
  ]

  public projects: Projects[] = [
    {
      index: 0,
      title: "Flipside Factories", 
      imgURL: "assets/FlipsideFactories.png", 
      description: "Winner of a 24 hour Game Jam hosted by SDU's association for software students, Enigma.", 
      longDescription: "The game is a top down factory builder with its twist being spatial anomalies. The objective is to craft certain items in order to unlock new levels and eventually escape. The player has to utilize the spatial anomalies to move materials around.", 
      technologies: [
        this.technologies[1],
        this.technologies[11]
      ], 
      referrals: [
        {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: "https://github.com/VinciDa33/Enigma-Game-Jam"},
        {name: "Itch-Io", imgURL: this.technologies[16].iconURL, redirectURL: "https://vincida.itch.io/flipside-factories"}
      ],
      origin: { origin: "Enigma Game Jam", accomplishment: "winner" }
    },
    {
      index: 1,
      title: "Clicker Game", 
      imgURL: "assets/ClickerGame.png", 
      description: "A simple incremental clicker game.", 
      longDescription: "This game was my first look at the unity game engine as well as my first look at C# with new found knowledge from my degree. The game is a simple clicker game where the player has to click to gain points to buy generators and upgrades to gain points faster.", 
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
      longDescription: "This is a rendition of the classic arcade game, Asteroids. The game is built using Java and JavaFX with a component-based architecture. The game is built using Java Platform Module System (JPMS) to modularize the game and it utilizes springs functionality to act microservice to track score.", 
      technologies: [
        this.technologies[0],
        this.technologies[7],
        this.technologies[8]
      ], 
      referrals: [
        {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: "https://github.com/LasseGH22/AsteroidsFX/tree/LasseMain"},
      ],
      origin: { origin: "University", subject: "Component-based Software Engineering", grade: "Ungraded"}
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
        this.technologies[13]
      ], 
      referrals: [
        {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: "https://github.com/LasseGH22/ApiProject"},
      ],
      origin: { origin: "University", subject: "Softwaretechnology in cyber-physical systems", grade: "Ungraded" }
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
        this.technologies[13]
      ], 
      referrals: [
        {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: "https://github.com/DroneDudes/SEMPRO4"},
      ],
      origin: { origin: "University", subject: "4th. Semester Project", grade: "Ungraded" }
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
        this.technologies[19]
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
        this.technologies[14]
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
        this.technologies[9]
      ], 
      referrals: [
        {name: "Github", imgURL: this.technologies[15].iconURL, redirectURL: ""},
      ],
      origin: { origin: "Personal project" }
    },
  ]
}
