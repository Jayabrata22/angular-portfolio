import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerProjects', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  featuredProjects: Project[] = [
    {
      id: 'enterprise-crm',
      title: 'Enterprise CRM System',
      description: 'A comprehensive customer relationship management system built for large enterprises. Features include contact management, deal tracking, reporting dashboards, and integration with third-party services.',
      technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework', 'Angular', 'Azure'],
      imageUrl: 'assets/images/projects/crm.jpg',
      liveUrl: 'https://example.com/crm-demo',
      featured: true
    },
    {
      id: 'finance-dashboard',
      title: 'Financial Analytics Dashboard',
      description: 'Real-time financial analytics dashboard for monitoring market trends, portfolio performance, and investment opportunities. Includes interactive charts and predictive analytics.',
      technologies: ['ASP.NET Core', 'SignalR', 'SQL Server', 'Angular', 'D3.js', 'TypeScript'],
      imageUrl: 'assets/images/projects/finance.jpg',
      githubUrl: 'https://github.com/johndoe/finance-dashboard',
      featured: true
    },
    {
      id: 'microservices-platform',
      title: 'E-commerce Microservices Platform',
      description: 'A scalable e-commerce platform built with microservices architecture. Services include product catalog, inventory management, order processing, and payment gateway integrations.',
      technologies: ['.NET Core', 'Docker', 'Kubernetes', 'RabbitMQ', 'MongoDB', 'Redis'],
      imageUrl: 'assets/images/projects/ecommerce.jpg',
      featured: true
    }
  ];

  otherProjects: Project[] = [
    {
      id: 'hr-management',
      title: 'HR Management System',
      description: 'Employee management system with features for onboarding, time tracking, performance reviews, and payroll integration.',
      technologies: ['.NET Core', 'SQL Server', 'Bootstrap', 'jQuery', 'Azure AD'],
      imageUrl: 'assets/images/projects/hr.jpg',
      featured: false
    },
    {
      id: 'task-tracker',
      title: 'Task Tracking Application',
      description: 'A productivity tool for teams to manage tasks, track progress, and collaborate on projects.',
      technologies: ['.NET Core', 'Entity Framework', 'Angular', 'Material Design', 'SignalR'],
      imageUrl: '/images/TaskManagement.jpg',
      githubUrl: 'https://github.com/johndoe/task-tracker',
      featured: false
    },
    {
      id: 'inventory-system',
      title: 'Inventory Management System',
      description: 'Real-time inventory tracking system with barcode scanning, stock alerts, and reporting capabilities.',
      technologies: ['.NET Core', 'SQL Server', 'Angular', 'Bootstrap', 'Azure Functions'],
      imageUrl: 'assets/images/projects/inventory.jpg',
      featured: false
    },
    {
      id: 'api-gateway',
      title: 'API Gateway & Authentication Service',
      description: 'Centralized API gateway with JWT authentication, rate limiting, and service discovery for microservices architecture.',
      technologies: ['.NET Core', 'Ocelot', 'IdentityServer4', 'Redis', 'Docker'],
      imageUrl: 'assets/images/projects/api.jpg',
      githubUrl: 'https://github.com/johndoe/api-gateway',
      featured: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}