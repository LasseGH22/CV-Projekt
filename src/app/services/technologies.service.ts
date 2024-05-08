import { Injectable } from '@angular/core';
import { Technologies } from '../models/technologies';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {
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
    {index: 13, name: "sql", iconURL: "assets/sql.png", altText: "SQL"},
    {index: 14, name: "postgresql", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", altText: "PostgreSQL"},

    {index: 15, name: "github", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", altText: "Github"},
    {index: 16, name: "itchIo", iconURL: "assets/Itch-Io.png", altText: "Itch.io"},
    {index: 17, name: "linkedIn", iconURL: "assets/LinkedIn.svg", altText: "LinkedIn"},

    {index: 18, name: "php", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg", altText: "PHP"},
    {index: 19, name: "supabase", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", altText: "Supabase"},
    {index: 20, name: "git", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", altText: "Git"},
  ];

  constructor() { }

  getTechnologies(): Technologies[] {
    return this.technologies;
  }
}
