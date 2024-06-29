import { Component } from '@angular/core';
import { TimelineEntry } from '../models/timeline-entry';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  TimelineEntries: TimelineEntry[] = [
    {
      index: 0,
      title: ["E A R L Y", "D A Y S"],
      description: "I have always had a strong interest in technology, especially computers. As a result, Computer games have played a significant part in my life and to this day remains a great hobby of mine. During my early years of gaming, I developed a curiosity for how my favorite games were made. Although I had absolutetly no understanding of how they were made, they fascinated me."
    },
    {
      index: 1,
      title: ["P R I M A R Y", "S C H O O L"],
      description: "My curiosity continued to grow, evolving into a broader interest in software and the various applications I used daily. In primary school, I took my first steps into programming by joining an elective course that taught low-level block-based software development. Alongside this, I enrolled in an optional course that introduced me to the very basics of web development. I vividly remember creating a simple website using only HTML and CSS, designed solely to redirect people to my Steam profile's trade section in hopes of getting free items."
    },
    {
      index: 2,
      title: ["H I G H", "S C H O O L"],
      description: "After completing primary school, choosing a specialization and program for high school was an easy decision. I opted for a Higher Technical Examination (HTX) with a focus on Programming and Communication-and-IT. During this time, I learned the fundamentals of object-oriented programming in C# and gained experience in Arduino programming and the necessary electronics work. It was at this point, I started to enjoy the brain-twisting challenges and intricate thinking involved in software development."
    },
    {
      index: 3,
      title: ["U N I V E R S I T Y"],
      description: "After high school, I decided to pursue a BEng in Software Technology at the University of Southern Denmark. The program has, so far, provided me with a comprehensive understanding of software development, covering software engineering principles, advanced object-oriented programming, and in-depth web development. I've also gained experience with databases, software architecture, design patterns, software testing, and more. I have applied this knowledge in various projects, both individually and in groups. The contrast between working individually and in groups has taught me the significance and advantages of a strong team dynamic and communication between all involved."
    }
  ]
}
