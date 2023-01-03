import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, plugins, registerables } from 'node_modules/chart.js'

Chart.register(...registerables);
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  public chart: any;
  constructor(private router:Router){
  }
  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart
      data: {// values on X-Axis
         datasets: [
          {
            label: "Ratio",
            data: ['467','576'],
            backgroundColor: '#B4E7B4 ',
            borderWidth: 1,
            //cutout: '80%',
          },
        ],
      },
      options: {
        //aspectRatio:2.5,
        maintainAspectRatio: false,
        onClick:(event, elements, chart)=> {
            // console.log(elements[0].index);
             let i=elements[0].index;
            // console.log(this.chart.data.datasets[0].data[int]);
           console.log("i clicked");
           this.onClickOnChart(i);
        },
      }
    });
  }

  onClickOnChart(i:number){
    if(i==0)
      this.router.navigateByUrl("selectratio");
    if(i==1)
    this.router.navigateByUrl("rejectratio");
  }
}
