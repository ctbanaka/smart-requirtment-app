import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  async getPendingOffersData(): Promise<any> {
    const offerUrl = 'http://192.168.29.22:3000/api/pendingoffers';
    return await lastValueFrom(this.http.get(offerUrl));
  }

  async getBonusApproval(): Promise<any> {
    const bonusUrl = 'http://192.168.29.22:3000/api/joiningbonus';
    return await lastValueFrom(this.http.get(bonusUrl));
  }
}
