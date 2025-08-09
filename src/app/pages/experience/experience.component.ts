import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
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
          style({ opacity: 0, transform: 'translateY(10px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit {
  activeTab: number = 0;
  
  experiences: Experience[] = [
    {
      company: 'Infosys.',
      position: 'Technology Analyst',
      period: 'April 2022 - Present',
      description: [
        'Lead a team of 5 developers to build and maintain enterprise-level .NET Core applications',
        'Designed and implemented a microservices architecture that improved system scalability by 40%',
        'Developed RESTful APIs consumed by web and mobile applications',
        'Implemented CI/CD pipelines using Azure DevOps, reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews to ensure code quality'
      ],
      technologies: ['.NET 6','ASP.NET MVC','Rezor','ASP.NET Core', 'C#', 'Azure', 'Microservices', 'SQL Server', 'Angular', 'Entity Framework', 'Bootstrap','JavaScript', 'HTML/CSS', 'Git']
    }
    // {
    //   company: 'FinTech Solutions',
    //   position: 'Full Stack Developer',
    //   period: 'Mar 2018 - Dec 2020',
    //   description: [
    //     'Built and maintained a high-performance financial reporting dashboard using ASP.NET Core and Angular',
    //     'Implemented real-time data visualization features using SignalR, improving user engagement by 30%',
    //     'Developed and optimized complex SQL queries and stored procedures for financial calculations',
    //     'Collaborated with UX/UI designers to implement responsive and user-friendly interfaces',
    //     'Reduced application load time by 50% through code optimization and caching strategies'
    //   ],
    //   technologies: ['ASP.NET Core', 'C#', 'Angular', 'SQL Server', 'SignalR', 'Entity Framework', 'TypeScript']
    // },
    // {
    //   company: 'Digital Innovators LLC',
    //   position: 'Software Engineer',
    //   period: 'Jun 2016 - Feb 2018',
    //   description: [
    //     'Developed web applications using ASP.NET MVC and jQuery for various clients',
    //     'Created and maintained RESTful APIs for mobile application backends',
    //     'Implemented user authentication and authorization systems using Identity Framework',
    //     'Designed and optimized database schemas for SQL Server databases',
    //     'Participated in Agile development processes and sprint planning'
    //   ],
    //   technologies: ['ASP.NET MVC', 'C#', 'jQuery', 'SQL Server', 'Entity Framework', 'Bootstrap', 'Azure']
    // },
    // {
    //   company: 'Tech Innovations Ltd',
    //   position: 'Junior Developer',
    //   period: 'Aug 2015 - May 2016',
    //   description: [
    //     'Assisted in developing and maintaining web applications using ASP.NET',
    //     'Fixed bugs and implemented minor features in existing applications',
    //     'Wrote unit tests to ensure code quality and prevent regressions',
    //     'Participated in code reviews and implemented feedback from senior developers',
    //     'Created technical documentation for applications and features'
    //   ],
    //   technologies: ['ASP.NET', 'C#', 'JavaScript', 'SQL Server', 'HTML/CSS', 'TFS']
    // }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(index: number): void {
    this.activeTab = index;
  }
}