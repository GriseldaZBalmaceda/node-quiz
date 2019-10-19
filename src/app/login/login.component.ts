/**
 * Author: Griselda
 * Date: 9/24/2019
 * Description: login component showcasing form, http calls, and authentication of user
 */

import { Component, OnInit, Injectable } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //creating form
 employeeLogin:FormGroup;
  errorMessage:String;

ngOnInit() {
  this.employeeLogin = new FormGroup({
    employeeId: new FormControl('')
  })
}

  constructor(private http:HttpClient,private router:Router,private cookieService:CookieService) {

   }

  //  employee login function, accpet form as parameter
loginEmployee(employeeLogin:FormGroup){
  const employeeId=employeeLogin.value.employeeId
  console.log(employeeId)
//making get request with employeeId as a query, we then subscribe and check is user exists
  this.http.get('/api/employees/'+ employeeId).subscribe(res=>{
    if(res){
      //if authenticated we set a cookie and allow the user to navigate to the dashboard
      this.cookieService.set('isAuthenticated','true',1);
      this.cookieService.set('employeeId', employeeId, 1);
      this.router.navigate(['/dashboard'])
    }else{
      //if not authenticated the user recieves an error message
    this.errorMessage='Please try again'    }
  })
}

}
