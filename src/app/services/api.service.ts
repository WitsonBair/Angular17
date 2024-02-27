import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.httpClient.post<T>(url, data);
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.httpClient.put<T>(url, data);
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(url);
  }
}
