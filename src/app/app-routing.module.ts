import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MychartComponent } from './component/mychart/mychart.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RejectratioComponent } from './component/rejectratio/rejectratio.component';

const routes: Routes = [
  {path: "selectratio", component:MychartComponent},
  {path: "rejectratio", component:RejectratioComponent},
  {path: "",component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
