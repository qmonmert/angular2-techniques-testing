import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <h1>
      {{title}}
    </h1>
    <hr>
    <nav>
      <a routerLink="/joke" routerLinkActive="active" class="nav-jokes">Jokes</a>
      <a routerLink="/page-not-found" routerLinkActive="active" class="nav-page-not-found">Page Not Found</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app works!';
}
