import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivityModel } from '../model/activity.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activities:ActivityModel[]=[
    {activityName:'Office Work',activityHour:8},
    {activityName:'Sleeping',activityHour:7},
    {activityName:'Watching Movie',activityHour:2},
    {activityName:'Reading Books',activityHour:3},
   

  ]

  constructor(private http:HttpClient) { }

  getAll(){
    return this.activities;
  }


  async getChartData() : Promise<any> {
    const chartUrl = 'http://localhost:3300/activity';
    return await lastValueFrom(this.http.get(chartUrl));
  }


  GetChartinfo(){
    return this.http.get("http://localhost:3300/activity");
  }


  GetRejectRatio(){
    return this.http.get("http://localhost:3300/reject");
  }
}
