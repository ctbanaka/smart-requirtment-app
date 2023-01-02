import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './component/chart/chart.component';
import { PieChartComponent } from './component/pie-chart/pie-chart.component';

import * as CanvasJSAngularChart from '../assets/canvasjs-3.7.2/canvasjs.angular.component';
import { RejectratioComponent } from './component/rejectratio/rejectratio.component';
import { NavbarComponent } from './component/navbar/navbar.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;



@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PieChartComponent,
    CanvasJSChart,
    RejectratioComponent,
    NavbarComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
