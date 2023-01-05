import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferspendingService {

  private baseURL = "http://192.168.1.8:3300/users";
  constructor(private httpClient: HttpClient) { }

  getOffersPendingList(): Observable<any> {

    return this.httpClient.get<any>(this.baseURL);
}
}