import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../services/details.service';
import * as Api from '../../shared/api';
import { AnalyticsModel } from '../../model/analyticsModel';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
  providers: []
})
export class AnalyticsComponent implements OnInit {

  analyticsData: AnalyticsModel[];
  barChart: any;
  lineChart: any;
  donoughtChart: any;

  constructor(private deviceService: DetailsService) {

  }

  ngOnInit() {
    this.getAnalyticsData();

  }

  getAnalyticsData() {
    this.deviceService.get(Api.getAnalyticsData).subscribe(
      data => {
        this.analyticsData = data.DeviceData,
          this.setChartData(this.analyticsData)
      }
    );
  }

  setChartData(data: any) {

    let deviceId = new Array<any>();
    let currentValue = new Array<any>();
    let chartData = new Array<any>();
    let label = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    data.forEach(values => {
      deviceId.push(values.DeviceId),
        currentValue.push(values.CurrentValue),
        chartData.push({ "data": values.Last10Hrs, "label": values.DeviceId })
    });

    this.barChart = { "label": label, "type": "bar", "data": chartData };
    this.lineChart = { "label": label, "type": "line", "data": chartData };
    this.donoughtChart = { "label": deviceId, "type": "doughnut", "data": currentValue };
  }

}
