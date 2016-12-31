import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <h1>
      {{title}}
    </h1>
    <hr>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app works!';
}
