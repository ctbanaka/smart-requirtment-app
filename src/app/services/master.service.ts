import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  GetChartinfo(){
    return this.http.get("http://10.77.240.15:5000/todos");
  }

  GetRejectinfo(){
    return this.http.get("http://10.77.240.15:5000/reject");
  }

}
