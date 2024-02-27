import { Component, Injectable, InjectionToken, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { NotificationsService } from '../services/notifications.service';
import { NotificationRemind } from '../types';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormComponent } from '../form/form.component';

export const MY_TOKEN = new InjectionToken<any>('my-token');

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule, TagModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  /* providers: [{ provide: MY_TOKEN, useValue: getData() }], */
})
export class HomeComponent {
  notifications: NotificationRemind[] = [];

  constructor(
    private notificationsService: NotificationsService,
    private router: Router
  ) {}

  date = new DatePipe('ru-RU');

  fetchNotifications() {
    this.notificationsService.getNotificationsList().subscribe({
      next: (data: any) => {
        this.notifications = data;
        console.log(data);
        data.forEach((element: any) => {
          element.createdAt = this.date.transform(
            element.createdAt,
            'dd.MM.yyyy HH:mm'
          );
          element.completedAt = this.date.transform(
            element.completedAt,
            'dd.MM.yyyy HH:mm'
          );
        });
      },
      error: (error) => console.log(error),
    });
  }

  ngOnInit() {
    this.fetchNotifications();
  }

  openEditForm(data: any) {
    console.log(data);
    this.router.navigate(['form'], { state: { data: data } });
    /* this.router.navigate(['form']); */
  }

  /* ngOnInit() {
        this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));
    }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }

  getStatusSeverity(status: string) {
    switch (status) {
      case 'PENDING':
        return 'warning';
      case 'DELIVERED':
        return 'success';
      case 'CANCELLED':
        return 'danger';
    }
  } */
}
