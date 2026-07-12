import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from './home/home.component'; /this import for HomeComponent is not needed in AppComponent, as its already imported in app.routes.ts
//Basically we will render the HomeComponent and TodoComponent using the RouterOutlet instead of AppComponent
//The router outlet is what prevent full page reload and enables SPA(single page application)
//by only refresing the part/component of the page that needs to be refreshed/rendered
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    // HomeComponent,
    HeaderComponent],
  template: `
    <app-header />
    <main>
      <!-- <app-home /> -->
       <router-outlet />
    </main>  
  `,
  styles: [`
    main {
      padding: 16px;

    }
    `],
})
export class AppComponent {
  title = "Prannoy's First Angular App";
}
