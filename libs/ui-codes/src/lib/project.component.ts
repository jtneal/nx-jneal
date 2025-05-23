import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-project',
  imports: [CommonModule],
  styles: `
    :host {
      display: block;
      flex: 0 1 calc((100% - 3rem) / 3);
    }

    article {
      border: 1px solid var(--background-muted);
      border-radius: 0.5rem;
      display: block;
      overflow: hidden;
      transition: transform 0.2s ease-out;

      &:hover {
        transform: translateY(-5px);

        img {
          transform: scale(1.05);
        }
      }
    }

    img {
      border-radius: 0.5rem 0.5rem 0 0;
      object-fit: cover;
      height: 12rem;
      transition: transform 0.2s ease-out;
      width: 100%;
    }

    .card-content {
      border-radius: 0 0 0.5rem 0.5rem;
      padding: 1.5rem;
    }

    .pills {
      color: var(--foreground);
      display: flex;
      font-size: 0.75rem;
      font-weight: 600;
      gap: 0.5rem;
      margin-top: 1rem;

      span {
        background-color: var(--background-muted);
        border-radius: 0.75rem;
        padding: 0.1rem 0.5rem;
      }
    }

    .description {
      margin-top: 1.5rem;
    }

    .buttons {
      display: flex;
      gap: 1.5rem;
      margin-top: 1.5rem;

      a {
        align-items: center;
        background-color: var(--background);
        border: 1px solid var(--background-muted);
        border-radius: .5rem;
        color: var(--foreground);
        display: flex;
        flex: 0 0 calc(50% - 0.75rem);
        gap: 0.75rem;
        justify-content: center;
        padding: 0.5rem;

        &:hover {
          background-color: var(--background-muted);
        }
      }
    }

    svg {
      height: 16px;
      width: 16px;
    }
  `,
  template: `
    <article>
      <img
        alt="temporary"
        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
      />
      <div class="card-content">
        <h3>Project Alpha</h3>
        <p class="pills">
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
        </p>
        <p class="description">A full-stack web application built with Next.js and TypeScript.</p>
        <!-- prettier-ignore -->
        <p class="buttons text-small">
          <a href="#" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link mr-2 h-4 w-4"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
            <span>Demo</span>
          </a>
          <a href="#" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github mr-2 h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            <span>Code</span>
          </a>
        </p>
      </div>
    </article>
  `,
})
export class ProjectComponent {}
