import { Component, OnInit, Input } from '@angular/core';
import { DeviceModel } from '../../model/deviceModel';


@Component({
  selector: 'app-device-location',
  templateUrl: './device-location.component.html',
  styleUrls: ['./device-location.component.css']
})
export class DeviceLocationComponent implements OnInit {

  @Input() DeviceLocation: Array<DeviceModel>;
  lat:number;
  lng:number;

  constructor() { }

  ngOnInit() {

  }

  ConvertString(value){
    return parseFloat(value)
    }
}
