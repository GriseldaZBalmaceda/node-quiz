/**
 * Author: Griselda
 * Date: 9/24/2019
 * Description: Cummulative Summary
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cummulative-summary',
  templateUrl: './cummulative-summary.component.html',
  styleUrls: ['./cummulative-summary.component.css']
})
export class CummulativeSummaryComponent implements OnInit {

  //adding data to table
  summary:any;
  employeeId:any;
  employee:any;
  employeeName:any;
  displayedColumns: string[] = ['employeeId', 'quizId', 'name', 'score'];
  constructor(private router:Router,private http:HttpClient) {
    this.http.get('/api/summary').subscribe(res=>{
      if(res){
      this.summary=res
      console.log(this.summary)
      }else{
        //if not authenticated the user recieves an error message
     console.log('error')
    }})
  }

  ngOnInit() {
  }

}
