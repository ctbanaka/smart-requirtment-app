import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferspendingService {
/*
  private baseURL = "http://localhost:8083/reservation";
  constructor(private httpClient: HttpClient) { }

  getReservationList(): Observable<any> {

    return this.httpClient.get<any>( "http://localhost:8083/reservation/ShowAllReservations");

  }*/
  private baseURL = "http://192.168.1.9:3300/users";
  constructor(private httpClient: HttpClient) { }

  getOffersPendingList(): Observable<any> {

    return this.httpClient.get<any>(this.baseURL);
}
}