import { Component, OnInit } from '@angular/core';
import { IChart } from 'src/app/model/IChart';
import { ActivityService } from 'src/app/services/activity.service';
declare var google: any;


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  chartData!: IChart;

  constructor(

    private chartService: ActivityService
  ) { }



  async ngOnInit() {

    await this.initChartData();

    google.charts.load("current", { packages: ["corechart"] });

    google.charts.setOnLoadCallback(this.drawChart.bind(this));

  }



  async initChartData() {

    this.chartData = await this.chartService.getChartData();

    console.log(this.chartData);

   

  }



  drawChart() {

    console.log("drawing chart");

    const rejectionRatio = Number(this.chartData.totalratio.rejectedRatio);

    const selectionRatio = Number(this.chartData.totalratio.selectedRatio);

    var data = google.visualization.arrayToDataTable([

      ['Task', 'percentage'],

      ['Rejected ratio', rejectionRatio],

      ['Selected ratio', selectionRatio],




    ]);

    var options = {

      pieHole: .6,



      width: 600,

      height: 400,



      plotOptions: {

        pie: {

          donut: {

            labels: {

              show: true,

              total: {

                show: true

              }

            }

          }

        }



      }



    }

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));

    chart.draw(data, options);

  }



  



}
