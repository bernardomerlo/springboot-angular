import { ApplicationConfig, Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'api-front';
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch())],
};
