import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-nav-toolbar',
  standalone: true,
  imports: [ButtonModule, ToolbarModule, RouterLink],
  templateUrl: './nav-toolbar.component.html',
  styleUrl: './nav-toolbar.component.css',
})
export class NavToolbarComponent {}
