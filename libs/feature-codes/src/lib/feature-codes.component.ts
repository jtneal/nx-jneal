import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  Job,
  JobsComponent,
  Project,
  ProjectsComponent,
  School,
  SchoolsComponent,
  Skill,
  SkillsComponent,
} from '@nx-jneal/ui-codes';
import { Article, ArticlesComponent, SubHeroComponent, SubNavComponent, SubNavLink } from '@nx-jneal/ui-components';

@Component({
  selector: 'lib-feature-codes',
  imports: [
    ArticlesComponent,
    CommonModule,
    JobsComponent,
    MatIconModule,
    ProjectsComponent,
    SchoolsComponent,
    SkillsComponent,
    SubHeroComponent,
    SubNavComponent,
  ],
  template: `
    <lib-sub-hero [description]="hero.description" [image]="hero.image" [title]="hero.title"></lib-sub-hero>
    <div class="sticky-container">
      <lib-sub-nav [links]="links"></lib-sub-nav>
      <div class="sub-content">
        <lib-projects [projects]="projects"></lib-projects>
        <lib-jobs [jobs]="jobs"></lib-jobs>
        <lib-schools [schools]="schools"></lib-schools>
        <lib-skills [skills]="skills"></lib-skills>
        <lib-articles [articles]="articles"></lib-articles>
      </div>
    </div>
  `,
})
export class FeatureCodesComponent {
  public hero = {
    description: 'Software engineering, programming tutorials, and tech insights',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    title: 'JNealCodes',
  };

  public links: SubNavLink[] = [
    { icon: 'code', link: 'projects', title: 'Projects' },
    { icon: 'work_outline', link: 'experience', title: 'Experience' },
    { icon: 'work_outline', link: 'education', title: 'Education' },
    { icon: 'lightbulb_outline', link: 'skills', title: 'Skills' },
    { icon: 'list_alt', link: 'articles', title: 'Articles' },
  ];

  public projects: Project[] = [
    {
      code: '#',
      demo: '#',
      description: 'A full-stack web application built with Next.js and TypeScript.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      title: 'Project Alpha',
    },
    {
      code: '#',
      demo: '#',
      description: 'A mobile application built with React Native and Firebase.',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop',
      tech: ['React Native', 'Firebase', 'Redux'],
      title: 'Project Beta',
    },
    {
      code: '#',
      demo: '#',
      description: 'A machine learning model for image classification.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
      tech: ['Python', 'TransorFlow', 'Keras'],
      title: 'Project Gamma',
    },
  ];

  public jobs: Job[] = [
    { company: 'Tech Company Inc.', dates: '2020 - Present', title: 'Senior Software Engineer' },
    { company: 'Digital Solutions LLC', dates: '2017 - 2020', title: 'Software Developer' },
    { company: 'Startup Innovations', dates: '2015 - 2017', title: 'Junior Developer' },
  ];

  public schools: School[] = [
    { dates: '2011 - 2015', name: 'University of Technology', title: 'Bachelor of Science in Computer Science' },
    { dates: '2019', name: 'Amazon Web Services', title: 'AWS Certified Solutions' },
  ];

  public skills: Skill[] = [
    {
      description: 'Technologies and tools I work with',
      tech: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion', 'Redux'],
      title: 'Frontend Development',
    },
    {
      description: 'Technologies and tools I work with',
      tech: ['Node.js', 'Express', 'NestJS', 'Python', 'Django', 'GraphQL', 'REST API', 'PostgreSQL', 'MongoDB'],
      title: 'Backend Development',
    },
    {
      description: 'Technologies and tools I work with',
      tech: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Jest', 'Cypress', 'Webpack'],
      title: 'DevOps & Tools',
    },
    {
      description: 'Technologies and tools I work with',
      tech: [
        'UI/UX Design',
        'Figma',
        'Responsive Design',
        'Performance Optimization',
        'SEO',
        'Accessibility',
        'Technical Writing',
      ],
      title: 'Other Skills',
    },
  ];

  public articles: Article[] = [
    {
      date: 'May 10, 2023',
      description: 'Learn how to create a full-stack application using Next.js, TypeScript, and Tailwind CSS.',
      length: '8',
      link: '#',
      title: 'Building a Modern Web Application with Next.js',
    },
    {
      date: 'April 22, 2023',
      description: 'Exploring the benefits and use cases of React Server Components in modern web development.',
      length: '6',
      link: '#',
      title: 'The Power of Server Components in React',
    },
    {
      date: 'March 15, 2023',
      description: 'A comprehensive look at modern state management solutions for React applications.',
      length: '10',
      link: '#',
      title: 'State Management in 2023: Beyond Redux',
    },
  ];
}
