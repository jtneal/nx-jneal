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
    description: 'Featured projects, work experience, education, skills & technologies, and articles.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    title: 'JNealCodes',
  };

  public links: SubNavLink[] = [
    { icon: 'jneal_code', link: 'projects', title: 'Projects' },
    { icon: 'jneal_work', link: 'experience', title: 'Experience' },
    { icon: 'jneal_cap', link: 'education', title: 'Education' },
    { icon: 'jneal_tech', link: 'skills', title: 'Skills' },
    { icon: 'jneal_book', link: 'articles', title: 'Articles' },
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
    {
      company: 'Rocket Mortgage',
      dates: 'Oct 2019 - Present',
      description: [
        'Introduced Nx and migrated dozens of micro-frontend applications into a monorepo',
        'Designed and developed a micro-frontend architecture in Angular with Module Federation',
        'Lead architect and engineer for our NextGen platform, a multi-year modernization effort',
        'Utilized the strangler pattern to incrementally migrate functionality out of legacy systems',
        'Proven track record of successful mentorship with senior engineers and entire dev teams',
        'Championed multiple upgrade efforts to ensure our software remained modern and secure',
        'Consistent focus on documentation, knowledge sharing, and cross-team collaboration',
        'Lead architect and engineer for our Mortgage Broker Directory, featured in a Super Bowl ad',
        'Migrated dozens of applications from ECS to EKS using tools such as Helm and Rancher',
        'Improved efficiency by building internal tools to automate or augment manual processes',
        'Helped scale products to support massive business growth from 7b to 116b over 4 years',
        'Implemented many optimizations to help support traffic increase of over 400% in 1 year',
      ],
      title: 'Staff Software Engineer',
    },
    {
      company: 'Quicken Loans',
      dates: 'Mar 2017 - Oct 2019',
      description: [
        'Consistently pushed myself and other engineers to improve our quality and write clean code',
        'Championed efforts to improve our testing strategy and encouraged others to contribute',
        'Migrated our automated builds from Jenkins to CircleCI and improved build times by 80%',
        'Created QL Badges to enable project maintainers to easily add quality badges to their repositories',
        'Created a CLI application to assist with local development and automate repetitive tasks',
        'Implemented automated code quality enforcement into our continuous integration builds',
        'Continued to spearhead our efforts of increasing code coverage by raising it from 56.4% to 81%',
        'Improved performance by caching slow services and decreased load times by as much as 92%',
      ],
      title: 'Senior Software Engineer',
    },
    {
      company: 'Quicken Loans',
      dates: 'Feb 2016 - Mar 2017',
      description: [
        'Day to day work involved PHP, AngularJS, Docker, Redis, Solr, Silex, Symfony, and more',
        'Increased the code coverage of the partner portal frontend codebase from 24.9% to 56.4%',
        'Built a Docker-based local development environment to get engineers off shared dev VMs',
        'Updated our codebases and internal dependencies to be PHP 7 compatible',
        'Helped build Shipyard to provide better visibility into our PRs and automate release merges/tags',
      ],
      title: 'Software Engineer',
    },
    {
      company: 'Erwin Penland',
      dates: 'Aug 2012 - Jan 2016',
      description: [
        'LAMP stack with OO PHP 5, CodeIgniter, MVC architecture, MySQL',
        'Developed APIs w/ FlightPHP, Runscope for API testing/debugging',
        'Integrated with CMS including ExpressionEngine, WordPress, Drupal',
        'Performance tuning of code, tables, and SQL for high availability',
        'Helped maintain automated builds and deploys with Jenkins',
        'Conducted code reviews to ensure projects maintained high quality',
        'Often finished projects earlier than estimated saving time and money',
      ],
      title: 'Interactive Developer',
    },
    {
      company: 'Hannush Enterprises',
      dates: 'Nov 2008 - Aug 2012',
      description: [
        'Did frontend (HTML/CSS/JS) and backend (PHP/Joomla/WordPress)',
        'Researched best practices for SEO to ensure code was optimized',
        'Trained clients to manage their content w/ Joomla and/or WordPress',
        'Mentored junior developers on best practices and coding standards',
      ],
      title: 'Lead Web Developer',
    },
  ];

  public schools: School[] = [
    { dates: 'Mar 2023 - Present', name: 'Western Governors University', title: 'BS in Computer Software Engineering' },
    { dates: 'Jun 2024 - Present', name: 'PeopleCert', title: 'ITIL®4 Foundation' },
    { dates: 'Apr 2024 - Present', name: 'CompTIA', title: 'CompTIA Project+' },
    {
      dates: 'Feb 2023 - Present',
      name: 'Amazon Web Services',
      title: 'AWS Certified Solutions Architect - Associate',
    },
    { dates: 'Feb 2023 - Present', name: 'Amazon Web Services', title: 'AWS Certified Cloud Practitioner' },
    {
      dates: 'Aug 2005 - Dec 2006',
      name: 'Greenville Technical College',
      title: 'Classes in Network Systems Administration',
    },
    {
      dates: 'Jun 2003 - Dec 2003',
      name: 'ECPI - College of Technology',
      title: 'Classes in Networking & Security Mangement',
    },
    { dates: 'Aug 1999 - Jun 2003', name: 'Easley High School', title: 'Enhanced Academic Diploma' },
  ];

  public skills: Skill[] = [
    {
      tech: [
        { name: 'Angular', rating: 3 },
        { name: 'Bootstrap', rating: 3 },
        { name: 'CSS', rating: 3 },
        { name: 'HTML', rating: 3 },
        { name: 'JavaScript', rating: 3 },
        { name: 'jQuery', rating: 3 },
        { name: 'Material Design', rating: 3 },
        { name: 'Micro Frontend', rating: 3 },
        { name: 'Module Federation', rating: 3 },
        { name: 'Native Federation', rating: 3 },
        { name: 'Responsive Design', rating: 3 },
        { name: 'RxJS', rating: 3 },
        { name: 'Sass', rating: 3 },
        { name: 'TypeScript', rating: 3 },
        { name: 'Web Components', rating: 3 },
        { name: 'Webpack', rating: 3 },
        { name: 'NgRx', rating: 2 },
        { name: 'Storybook', rating: 2 },
        { name: 'Next.js', rating: 1 },
        { name: 'React', rating: 1 },
        { name: 'Tailwind CSS', rating: 1 },
        { name: 'Vite', rating: 1 },
      ],
      title: 'Frontend Development',
    },
    {
      tech: [
        { name: 'DynamoDB', rating: 3 },
        { name: 'Express', rating: 3 },
        { name: 'MariaDB', rating: 3 },
        { name: 'Memcached', rating: 3 },
        { name: 'Microservices', rating: 3 },
        { name: 'MySQL', rating: 3 },
        { name: 'NestJS', rating: 3 },
        { name: 'NodeJS', rating: 3 },
        { name: 'PHP', rating: 3 },
        { name: 'Redis', rating: 3 },
        { name: 'SQL', rating: 3 },
        { name: '.NET', rating: 2 },
        { name: 'C#', rating: 2 },
        { name: 'Elasticsearch', rating: 2 },
        { name: 'Laravel', rating: 2 },
        { name: 'MongoDB', rating: 2 },
        { name: 'Mongoose', rating: 2 },
        { name: 'PostgreSQL', rating: 2 },
        { name: 'Python', rating: 2 },
        { name: 'Symfony', rating: 2 },
        { name: 'WinForms', rating: 2 },
        { name: 'Cobra', rating: 1 },
        { name: 'Golang', rating: 1 },
      ],
      title: 'Backend Development',
    },
    {
      tech: [
        { name: 'Cypress', rating: 3 },
        { name: 'ESLint', rating: 3 },
        { name: 'Jasmine', rating: 3 },
        { name: 'Jest', rating: 3 },
        { name: 'Karma', rating: 3 },
        { name: 'Mockery', rating: 3 },
        { name: 'Newman', rating: 3 },
        { name: 'PHPUnit', rating: 3 },
        { name: 'Playwright', rating: 3 },
        { name: 'Postman', rating: 3 },
        { name: 'Prettier', rating: 3 },
        { name: 'Protractor', rating: 3 },
        { name: 'SuperTest', rating: 3 },
        { name: 'Chai', rating: 2 },
        { name: 'Cucumber', rating: 2 },
        { name: 'k6', rating: 2 },
        { name: 'Katalon', rating: 2 },
        { name: 'Mocha', rating: 2 },
        { name: 'Sinon', rating: 2 },
        { name: 'NUnit', rating: 1 },
        { name: 'xUnit', rating: 1 },
      ],
      title: 'Testing & Automation',
    },
    {
      tech: [
        { name: 'AWS', rating: 3 },
        { name: 'Azure DevOps', rating: 3 },
        { name: 'Bash', rating: 3 },
        { name: 'CircleCI', rating: 3 },
        { name: 'Docker', rating: 3 },
        { name: 'GitHub Actions', rating: 3 },
        { name: 'HashiCorp Vault', rating: 3 },
        { name: 'jq', rating: 3 },
        { name: 'Linux', rating: 3 },
        { name: 'Nx', rating: 3 },
        { name: 'Snyk', rating: 3 },
        { name: 'SonarQube', rating: 3 },
        { name: 'Terraform', rating: 3 },
        { name: 'Datadog', rating: 2 },
        { name: 'Dynatrace', rating: 2 },
        { name: 'Grafana', rating: 2 },
        { name: 'Helm', rating: 2 },
        { name: 'Jenkins', rating: 2 },
        { name: 'JIRA', rating: 2 },
        { name: 'Kubernetes', rating: 2 },
        { name: 'Rancher', rating: 2 },
        { name: 'Splunk', rating: 2 },
        { name: 'Argo CD', rating: 1 },
        { name: 'Istio', rating: 1 },
      ],
      title: 'DevOps & Tools',
    },
    {
      tech: [
        { name: 'Agile', rating: 3 },
        { name: 'Code Reviews', rating: 3 },
        { name: 'Design Patterns', rating: 3 },
        { name: 'Design Reviews', rating: 3 },
        { name: 'Documentation', rating: 3 },
        { name: 'Figma', rating: 3 },
        { name: 'Kanban', rating: 3 },
        { name: 'Lucidchart', rating: 3 },
        { name: 'OO Programming', rating: 3 },
        { name: 'REST', rating: 3 },
        { name: 'SAFe', rating: 3 },
        { name: 'Scrum', rating: 3 },
        { name: 'SOLID', rating: 3 },
        { name: 'Standards', rating: 3 },
        { name: 'Style Guides', rating: 3 },
        { name: 'Technical Writing', rating: 3 },
        { name: 'UI/UX Design', rating: 3 },
        { name: 'BDD', rating: 2 },
        { name: 'Event-Driven Architecture', rating: 2 },
        { name: 'Functional Programming', rating: 2 },
        { name: 'GraphQL', rating: 2 },
        { name: 'Pair Programming', rating: 2 },
        { name: 'Signavio', rating: 2 },
        { name: 'TDD', rating: 2 },
      ],
      title: 'Software Design & Architecture',
    },
    {
      tech: [
        { name: 'Accessibility', rating: 3 },
        { name: 'Debugging', rating: 3 },
        { name: 'Mentoring', rating: 3 },
        { name: 'Performance Tuning', rating: 3 },
        { name: 'Problem Solving', rating: 3 },
        { name: 'Public Speaking', rating: 3 },
        { name: 'Root Cause Analysis', rating: 3 },
        { name: 'SEO', rating: 3 },
        { name: 'Troubleshooting', rating: 3 },
        { name: 'Internationalization', rating: 2 },
        { name: 'Localization', rating: 2 },
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
