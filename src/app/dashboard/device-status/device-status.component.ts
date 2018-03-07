import { Component, OnInit, Input } from '@angular/core';
import { ComponentInteractionService } from '../services/component-interaction.service';
import { DeviceModel } from '../../model/deviceModel';
import { environment } from '../../../environments/environment';
import { DetailsService } from '../../services/details.service';


@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.component.html',
  styleUrls: ['./device-status.component.css']
})
export class DeviceStatusComponent implements OnInit {

  @Input()
  DeviceDetail: DeviceModel;
  deviceLocation: string;
  deviceId: number;
  constructor(private _ciService: ComponentInteractionService, private detService: DetailsService) { }

  ngOnInit() {
    this._ciService.id.subscribe(id => this.deviceId = id);
      //this.getDeviceLocation(this.deviceId)

  }

  getDeviceLocation(id: number) {

    if (this.DeviceDetail !=undefined) {
      let lat = this.DeviceDetail.Lat;
      let lng = this.DeviceDetail.Lng;
      let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + environment.googleApiKey;
      console.log(url);
      this.detService.getExternal(url)
        .subscribe(data => {
          this.deviceLocation = data,
            console.log(data)
        });

    }
  }

}
