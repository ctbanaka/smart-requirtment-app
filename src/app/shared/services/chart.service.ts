import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
    private http: HttpClient
  ) { }

  async getChartData() : Promise<any> {
    const chartUrl = 'http://192.168.29.22:3000/api/ratio';
    return await lastValueFrom(this.http.get(chartUrl));
  }
}
