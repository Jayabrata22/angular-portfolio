import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Skill {
  name: string;
  percentage: number;
  icon?: string;
  color?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('barAnimation', [
      transition(':enter', [
        style({ width: 0 }),
        animate('0.8s ease-out')
      ])
    ]),
    trigger('staggerList', [
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
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [
    {
      name: '.NET & Backend',
      skills: [
        { name: 'C#', percentage: 95, color: '#953dac' },
        { name: '.NET Core', percentage: 90, color: '#6C3082' },
        { name: 'ASP.NET MVC', percentage: 90, color: '#512bd4' },
        { name: 'Entity Framework', percentage: 85, color: '#00a4ef' },
        { name: 'SQL Server', percentage: 85, color: '#f25022' },
        { name: 'REST APIs', percentage: 90, color: '#2bbb5b' }
      ]
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', percentage: 80, color: '#dd0031' },
        { name: 'TypeScript', percentage: 85, color: '#007acc' },
        { name: 'JavaScript', percentage: 85, color: '#f7df1e' },
        { name: 'HTML5/CSS3', percentage: 80, color: '#e34c26' },
        { name: 'Bootstrap', percentage: 75, color: '#563d7c' },
        { name: 'Material Design', percentage: 75, color: '#ffc107' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      skills: [
        { name: 'Azure', percentage: 80, color: '#0089d6' },
        { name: 'Docker', percentage: 75, color: '#2496ed' },
        { name: 'CI/CD', percentage: 80, color: '#40a977' },
        { name: 'Git', percentage: 90, color: '#f05032' },
        { name: 'Azure DevOps', percentage: 85, color: '#0078d7' },
        { name: 'Microservices', percentage: 80, color: '#ff6b6b' }
      ]
    },
    {
      name: 'Other Skills',
      skills: [
        { name: 'Agile/Scrum', percentage: 85, color: '#1e88e5' },
        { name: 'Unit Testing', percentage: 85, color: '#8bc34a' },
        { name: 'Design Patterns', percentage: 80, color: '#ff9800' },
        { name: 'Architecture', percentage: 75, color: '#9c27b0' },
        { name: 'Problem Solving', percentage: 90, color: '#3f51b5' },
        { name: 'Communication', percentage: 85, color: '#009688' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}