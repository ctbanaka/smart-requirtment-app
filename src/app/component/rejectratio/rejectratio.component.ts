import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);


@Component({
  selector: 'app-rejectratio',
  templateUrl: './rejectratio.component.html',
  styleUrls: ['./rejectratio.component.css']
})
export class RejectratioComponent implements OnInit {
  constructor(private service:MasterService) { }

  chartdata:any
labeldata:any[]=[];
realdata:any[]=[];
colordata:any[]=[];



ngOnInit(): void {
  this.service.GetRejectinfo().subscribe(result => {
    this.chartdata = result;
    if(this.chartdata!=null){
      for(let i=0; i<this.chartdata.length ;i++){
        //console.log(this.chartdata[i]);
        this.labeldata.push(this.chartdata[i].year);
        this.realdata.push(this.chartdata[i].amount);
        this.colordata.push(this.chartdata[i].colorcode);
      }
      this.RenderChart(this.labeldata,this.realdata,this.colordata,'bar','barchart');
      this.RenderChart(this.labeldata,this.realdata,this.colordata,'pie','piechart');
      this.RenderChart(this.labeldata,this.realdata,this.colordata,'doughnut','dochart');
      this.RenderChart(this.labeldata,this.realdata,this.colordata,'polarArea','pochart');

      this.RenderChart(this.labeldata,this.realdata,this.colordata,'radar','rochart');

      
    }
  });
  
  
}



RenderChart(labeldata:any,maindata:any,colordata:any,type:any,id:any) {
  //////----------------------------------------------------



const pieLabelsLine = {

  id: "pieLabelsLine",

  afterDraw(chart) {

    const {

      ctx,

      chartArea: { width, height },

    } = chart;



    const cx = chart._metasets[0].data[0].x;

    const cy = chart._metasets[0].data[0].y;



    const sum = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);



    chart.data.datasets.forEach((dataset, i) => {

      chart.getDatasetMeta(i).data.forEach((datapoint, index) => {

        const { x: a, y: b } = datapoint.tooltipPosition();



        const x = 2 * a - cx;

        const y = 2 * b - cy;



        // draw line

        const halfwidth = width / 2;

        const halfheight = height / 2;

        const xLine = x >= halfwidth ? x + 15 : x - 15;

        const yLine = y >= halfheight ? y + 15 : y - 15;



        const extraLine = x >= halfwidth ? 5 : -5;



        ctx.beginPath();

        ctx.moveTo(x, y);

        //ctx.arc(x, y, 2, 0, 2 * Math.PI, true);

        ctx.fill();

        ctx.moveTo(x, y);

        ctx.lineTo(xLine, yLine);

        ctx.lineTo(xLine + extraLine, yLine);

        // ctx.strokeStyle = dataset.backgroundColor[index];

        //ctx.strokeStyle = "black";

       

        ctx.stroke();



        // text

        const textWidth = ctx.measureText(chart.data.labels[index]).width;

        ctx.font = "12px Arial";

        // control the position

        const textXPosition = x >= halfwidth ? "left" : "right";

        const plusFivePx = x >= halfwidth ? 5 : -5;

        ctx.textAlign = textXPosition;

        ctx.textBaseline = "middle";

        // ctx.fillStyle = dataset.backgroundColor[index];

        ctx.fillStyle = "black";



        ctx.fillText(

          (chart.data.datasets[0].data[index] ) ,

          xLine + extraLine + plusFivePx,

          yLine

          //ctx.fillText(datapoint,xLine + extraLine  , yLine)

        );

      });

    });

  },

};




/////-------------------
  


  const myChart = new Chart(id,{
    type: type,
    data: {
      labels: labeldata,
      datasets: [{
        label: '# of Votes',
        data: maindata,
        backgroundColor: colordata,
        borderColor: [
          '#254F30'
        ],
        borderWidth: 1
      }]
    },

    options: {

      // responsive :true,
      // maintainAspectRatio: false,
      

      layout: {

        padding: 50

      },

      //indexLabel: "{year}: {amount}"

      plugins: {

        legend:{

          display:false

        }

      }

    },

    plugins: [

      pieLabelsLine

    ]
    // options: {
    //   scales: {
    //     y: {
    //       beginAtZero: true
    //     }
    //   }
    // }

  });


}

}
