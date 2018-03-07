import { Component, OnInit } from '@angular/core';
import * as Api from '../../shared/api';
import { DetailsService } from '../../services/details.service';
import { DeviceModel } from '../../model/deviceModel';
import { ComponentInteractionService } from '../services/component-interaction.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  deviceList: Array<DeviceModel>;
  deviceDetail: Array<DeviceModel>;


  constructor(private deviceService: DetailsService,
    private _ciService: ComponentInteractionService) {
    this.getDeviceList();
    this._ciService.getDeviceId(0);
  }

  ngOnInit() {
    this._ciService.id.subscribe(id => this.getDeviceDetail(id));
  }

  getDeviceList() {
    this.deviceService.get(Api.getAllDevice).subscribe(
      data => {
        this.deviceList = data.Device;
      },
      err => console.error(err)
    );
  }

  getDeviceDetail(deviceId: number) {
    if (deviceId != 0) {
      this.deviceDetail = this.deviceList.filter(device => device.DeviceId == deviceId)
    }
  }
}
