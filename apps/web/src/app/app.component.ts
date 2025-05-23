import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteFooterComponent, SiteHeaderComponent } from '@nx-jneal/ui-components';

@Component({
  imports: [RouterModule, SiteFooterComponent, SiteHeaderComponent],
  selector: 'app-root',
  styles: ``,
  template: `
    <lib-site-header></lib-site-header>
    <router-outlet></router-outlet>
    <lib-site-footer></lib-site-footer>
  `,
})
export class AppComponent {}
