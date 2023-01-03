import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiechartComponent } from './component/piechart/piechart.component';
import { HttpClientModule } from '@angular/common/http';
import { DonutComponent } from './component/donut/donut.component';
import { MychartComponent } from './component/mychart/mychart.component';
import { DemoComponent } from './component/demo/demo.component';

import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { PieSeriesService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';
import { RejectratioComponent } from './component/rejectratio/rejectratio.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ClickeventComponent } from './component/clickevent/clickevent.component';

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    DonutComponent,
    MychartComponent,
    DemoComponent,
    CanvasJSChart,
    RejectratioComponent,
    NavbarComponent,
    ClickeventComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccumulationChartModule
  ],
  providers: [PieSeriesService, AccumulationDataLabelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
