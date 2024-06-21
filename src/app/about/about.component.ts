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
      description: "I have always been very interested in tech, especially computers. Computer games has therefore been a big part of my life and is still a great hobby of mine. Through the years of gaming a curiosity for how my favorite games are made has grown."
    },
    {
      index: 1,
      title: ["P R I M A R Y", "S C H O O L"],
      description: "The curiosity kept growing and began to turn into a general interest for software and the different applications i used on a daily basis. It was in primary school i did my first programming as i joined an elective course teaching low level block-based software development. Besides the very low level of programming being taught, i also joined an extra course introducing me to the very basics of web development. I remember creating a very simple website, using only HTML and CSS, with the sole purpose of redirecting people to my Steam profile' trade section in hopes of getting free stuff."
    },
    {
      index: 2,
      title: ["H I G H", "S C H O O L"],
      description: "Once finished with Primary School choosing the specialization of my High School degree was at that point an easy task. I chose to study a Higher Technical Exam (HTX) with a specialization of Programming and Communication-and-It. I was taught the fundamentals of object oriented programming in C# and i also did some Arduino programming and the needed electronics work."
    },
    {
      index: 3,
      title: ["U N I V E R S I T Y"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus ipsum velit, ut mollis felis venenatis vel. Curabitur erat lacus, tempus non malesuada vitae, fermentum sit amet eros. Praesent mollis quam et leo ultricies pulvinar. Pellentesque eleifend lectus at ex elementum ornare. Pellentesque molestie rutrum turpis sit amet viverra. Aenean faucibus ullamcorper ipsum, vulputate lobortis mauris mattis eu. Mauris nec magna quam."
    }
  ]
}
