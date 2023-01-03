import { Component, OnInit } from '@angular/core';
import { convertHexToColor } from '@syncfusion/ej2-angular-charts';
import { ActivityModel } from 'src/app/model/activity.model';
import { ActivityService } from 'src/app/services/activity.service';
declare var google:any;

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor(private activityService:ActivityService) { }

  ngOnInit(): void {
    let activities:ActivityModel[]=this.activityService.getAll();
    google.charts.load('current', {packages: ['corechart']});
    this.buildChart(activities);


    
  
  }

  buildChart(activities:ActivityModel[]){
      var func=(chart:any)=>{

        var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    activities.forEach(item =>{
    data.addRows([
      [item.activityName, item.activityHour]
    ]);
  });

    var options = {
      //title: 'My Daily Activities',
      colors: ["#155c9e", "yellow", "red", "black"]
        };
        chart().draw(data, options);
      }
      var chart =()=> new google.visualization.PieChart(document.getElementById('divPieChart'));
      var callback=()=>func(chart);
      google.charts.setOnLoadCallback(callback);
  }


  

 /* drawChart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    //data.addColumn('string', 'Topping');
    //data.addColumn('number', 'Slices');
    data.addRows([
      ['Office work', 8],
      ['Sleeping', 7],
      ['Watching Movie', 2], 
      ['Reading Books', 4]
    ]);

    var options = {
      title: 'My Daily Activities',
      colors: ["#155c9e", "yellow", "red", "black"]
        };

   // var chart = new google.visualization.PieChart(document.getElementById('divPieChart'));
     // chart.draw(data, options);


  }*/

}
