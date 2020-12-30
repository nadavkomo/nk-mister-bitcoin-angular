import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../canvasjs.min.js';
import { bitcoinService } from '../../services/bitcoinService.js'

@Component({
  selector: 'statistic-app',
  templateUrl: './statistic-app.component.html',
  styleUrls: ['./statistic-app.component.scss']
})

export class StatisticAppComponent implements OnInit {
  async ngOnInit() {
    let dataPoints = [];
    let dataPoints2 = [];
    // let y = 0;
    // for (var i = 0; i < 10000; i++) {
    //   y += Math.round(5 + Math.random() * (-5 - 5));
    //   dataPoints.push({ y: y });
    // }
    const res = await bitcoinService.getMarketPrice()
    console.log(res);
    dataPoints = res.values
    console.log(dataPoints);
    const res2 = await bitcoinService.getTradeVolume()
    console.log(res2);
    dataPoints2 = res2.values
    console.log(dataPoints);

    let chart = new CanvasJS.Chart("chartContainer", {
      backgroundColor: "#c0d7ee",
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: res.name
      },
      subtitles: [{
        text: res.desc
      }],
      data: [
        {
          type: "line",
          dataPoints: dataPoints
        }]
    });
    let chart2 = new CanvasJS.Chart("chartContainer2", {
      backgroundColor: "#c0d7ee",
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: res2.name
      },
      subtitles: [{
        text: res2.desc
      }],
      data: [
        {
          type: "line",
          dataPoints: dataPoints2
        }]
    });

    chart2.render();
    chart.render();
  }
}
