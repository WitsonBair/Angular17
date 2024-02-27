import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'remind_me';
}
