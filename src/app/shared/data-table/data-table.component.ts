import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'custom-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() TableOption: any;

  globalData: any;

  //Sort parameters
  isDesc: boolean = false;
  column: number = 0;
  direction: number = 1;

  //Pagination
  curPage: any;
  pageSize: any;
  numberofPages: any;

  //Search Parameters
  search: any = "";

  constructor() { }

  ngOnInit() {
    this.curPage = 1; //set current page
    this.pageSize = 2; //set page size
    this.globalData = this.TableOption.Data;
  }

  sort(property) {
    this.isDesc = !this.isDesc; // change the direction
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
    this.curPage = 1;
  }

  ddlChange(property) {
    console.log('Hello');
  }


  numberOfPages() {
    //return Math.ceil(this.users.length / this.pageSize);
  };


}
