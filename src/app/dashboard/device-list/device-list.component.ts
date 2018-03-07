import { Component, OnInit, Input } from '@angular/core';
import { DeviceModel } from '../../model/deviceModel';
import { ComponentInteractionService } from '../services/component-interaction.service';


@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css'],
})
export class DeviceListComponent implements OnInit {

  @Input() DeviceList: Array<DeviceModel>;
  selected:number;
  constructor(private _ciService: ComponentInteractionService) { }

  ngOnInit() {
  }

  getDeviceDetail(id: number) {

    this._ciService.getDeviceId(id);
    this.selected=id;
  }
}
