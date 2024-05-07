import { Component } from '@angular/core';
import { Technologies } from '../models/technologies';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  public languages: Technologies[] = [
    {index: 1, name: "java", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", altText: "Java", type: "language"},
    {index: 2, name: "cSharp", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-line.svg", altText: "C#", type: "language"},
    {index: 3, name: "html", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", altText: "HTML", type: "language"},
    {index: 4, name: "css", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", altText: "CSS", type: "language"},
    {index: 5, name: "javascript", iconURL: "https://www.cdnlogo.com/logos/j/69/javascript.svg", altText: "JavaScript", type: "language"},
    {index: 6, name: "typescript", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", altText: "TypeScript", type: "language"}
  ];

  public frameworks: Technologies[] = [
    {index: 7, name: "tailwind", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg", altText: "Tailwind CSS", type: "framework"},
    {index: 9, name: "javaSpring", iconURL: "assets/Spring-wordmark.svg", altText: "Spring Boot", type: "framework"},
    {index: 10, name: "angular", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original-wordmark.svg", altText: "Angular", type: "framework"},
    {index: 11, name: "laravel", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-line-wordmark.svg", altText: "Laravel", type: "framework"},
    {index: 12, name: "unity", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original-wordmark.svg", altText: "Unity", type: "framework"},
  ];
  
  public tools: Technologies[] = [
    {index: 13, name: "docker", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", altText: "Docker", type: "tool"},
    {index: 14, name: "sql", iconURL: "assets/sql.png", altText: "SQL", type: "tool"},
    {index: 15, name: "postgresql", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", altText: "PostgreSQL", type: "tool"},
    {index: 16, name: "supabase", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", altText: "Supabase", type: "tool"},
    {index: 17, name: "php", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg", altText: "PHP", type: "tool"},
  ];

}