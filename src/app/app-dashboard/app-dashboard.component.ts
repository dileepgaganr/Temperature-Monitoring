import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent implements OnInit {

  toggle: boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onToggle(event) {
    this.toggle = event;
  }
}
