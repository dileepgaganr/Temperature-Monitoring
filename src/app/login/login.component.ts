import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string;
  password: string;
  loginForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private fb: FormBuilder) {
  
    localStorage.clear();
    this.loginForm = this.fb.group({
      userId: '',
      password: ''
    });
  }

  ngOnInit() {
   
  }


  login() {
    
    if (this.loginForm.value.userId === "dilipgaganr" && this.loginForm.value.password === "admin") {
      localStorage["loggedIn"] = true;
      localStorage["UserId"] = "dilipgaganr";
      this.router.navigate(["Dashboard"]);
    }
  }
}
