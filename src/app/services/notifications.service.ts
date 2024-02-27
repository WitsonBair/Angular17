import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

const API_URL: string = 'http://localhost:3000/notifications';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private apiService: ApiService) {}

  addNotification = (data: any): Observable<any> =>
    this.apiService.post(API_URL, data);

  getNotificationsList = (): Observable<any> => this.apiService.get(API_URL);

  getNotification = (id: string): Observable<any> =>
    this.apiService.get(`${API_URL}/${id}`);

  updateNotification = (id: string, data: any): Observable<any> =>
    this.apiService.put(`${API_URL}/${id}`, data);

  deleteNotification = (id: string): Observable<any> =>
    this.apiService.delete(`${API_URL}/${id}`);
}
