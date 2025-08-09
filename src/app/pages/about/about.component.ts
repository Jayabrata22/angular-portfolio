import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(15px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  techSkills: string[] = [
    'C#', '.NET Core', 'ASP.NET MVC', 'Entity Framework',
    'SQL Server', 'Azure', 'REST APIs', 'Microservices'
  ];

  frontendSkills: string[] = [
    'Angular', 'TypeScript', 'JavaScript', 'HTML5',
    'CSS3/SCSS', 'Bootstrap', 'Material Design', 'Responsive Design'
  ];

  toolsSkills: string[] = [
    'Visual Studio', 'VS Code', 'Git', 'GitHub/Azure DevOps',
    'Docker', 'CI/CD', 'Agile/Scrum', 'Unit Testing'
  ];

  constructor() { }

  ngOnInit(): void {
  }
}