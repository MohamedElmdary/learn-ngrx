import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <ul>
      <li>
        <a routerLink="/">
          home
        </a>
      </li>
      <li>
        <a routerLink="/post">
          post
        </a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
