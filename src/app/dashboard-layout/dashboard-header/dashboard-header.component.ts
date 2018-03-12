import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  toggle: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  open: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  sidebarToggle() {
    this.toggle = this.toggle ? false : true;
    this.toggleSidebar.emit(this.toggle);
  }

  // openProfile() {
  //   this.open = this.open ? false : true;
  // }

}
