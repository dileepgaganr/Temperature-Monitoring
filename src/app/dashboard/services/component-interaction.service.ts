import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ComponentInteractionService {

  deviceId = new BehaviorSubject<number>(0);
  id = this.deviceId.asObservable();

  constructor() { }

  getDeviceId(id: number) {
    this.deviceId.next(id);
  }

}
