import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
    HttpClientModule
  ],
  styleUrls: ['./app.component.less'],
  template: `<main>
              <a [routerLink]="['/']">
                <header class="brand-name">
                  <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
                </header>
              </a>
              <section class="content">
                <!-- <app-home></app-home> -->
                <router-outlet></router-outlet>
              </section>
            </main>`
})

export class AppComponent {
  title = 'Homes';
}

