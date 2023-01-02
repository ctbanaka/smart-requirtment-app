import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chart } from 'chart.js';
import { ChartComponent } from './component/chart/chart.component';
import { RejectratioComponent } from './component/rejectratio/rejectratio.component';

const routes: Routes = [
  {path:"chart",component:ChartComponent},
  {path:"selectratio",component:ChartComponent},
  {path:"rejectratio",component:RejectratioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
