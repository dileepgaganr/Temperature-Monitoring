import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../../model/userModel';
import * as Api from '../../shared/api';


@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {


  users: UserModel[];
  tableHead: string[];
  dataTableData: any;
  dataTableOption: any;

  constructor(private userSer: UserService) {
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers() {
    this.userSer.get(Api.getUsers).subscribe(data => {
      this.users = data.Users,
        this.loadTable()
    });
  }

  loadTable() {
    if (this.users !== undefined) {
      let data = Array<any>();
      this.users.forEach(values => {
        data.push(Object.values(values))
      });
      let settings = {
        "Columns": [
          {
            "ColumnName": "User Name",
            "Sortable": true,
            "Search": true,
            "Visible": true
          },
          {
            "ColumnName": "UserId",
            "Sortable": true,
            "Search": true,
            "Visible": false
          },
          {
            "ColumnName": "Email",
            "Sortable": false,
            "Search": false,
            "Visible": true
          },
          {
            "ColumnName": "Location",
            "Sortable": true,
            "Search": true,
            "Visible": true
          }
        ],
        "Data": data
      }
      this.dataTableOption = settings;
    }
  }
}
