/**
 * Author: Griselda
 * Date: 9/24/2019
 * Description: Quiz Component
 */

import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import * as moment from "moment";
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
quizId:any;
quiz:any;
questions:any;
quizName:any;
currentChoices:any;
quizResults:any;
employeeId:string;
questionNumber=0;
selectedAnswers=[]
answers=[]
correctAnswers=[]
score:any
pointsPerQuestion:any
qs:any=[];
q:any=[];
  constructor(private route:ActivatedRoute,private router:Router, private cookieService: CookieService,private http: HttpClient) {

    //need to solve why employeeId is not able to show
    this.employeeId = this.cookieService.get('employeeId');
    console.log(this.employeeId)
    this.quizId= this.route.snapshot.paramMap.get("id")
    //getting quiz information
    this.http.get('/api/quiz/'+ this.quizId).subscribe(res=>{
      if(res){
      console.log(res)
      this.quiz=res;
      this.questions=this.quiz.questions
      this.quizName=this.quiz.quizName
     this.pointsPerQuestion=100/this.questions.length
      console.log(this.questions);
      }else{

    }

   })
  }
  //generating form that will be sent via http post
  onSubmit(form) {
    this.quizResults = form;
    this.quizResults['quizId'] = this.quizId;
    this.quizResults['employeeId']=this.employeeId
    console.log(this.quizResults)
    for(const prop in this.quizResults){
    if(this.quizResults.hasOwnProperty(prop)){
      if(prop !== 'employeeId' && prop !== 'quizId'){
        this.selectedAnswers.push(this.quizResults[prop].split(';')[0]);

        this.answers.push(this.quizResults[prop].split(';')[1]);
      }
    }
  }
this.correctAnswers = this.answers.filter(function(correctAnswer){
  return correctAnswer==="true";
})
this.score=this.pointsPerQuestion*this.correctAnswers.length;
this.score=this.score.toString();
console.log(this.score)
console.log(this.score)
  // sending post request
   this.http.post('/api/summary', {
    employeeId: this.employeeId,
    quizId: this.quizId,
    quizName:this.quizName,
    date:moment().format('MM/DD/YYYY'),
    score:this.score,
  }).subscribe(
    err => {
      console.log("Something went wrong!", err);
    },
    () => {
        console.log("Post Works!");
    });


  }
goBackToDash(){
  this.router.navigate(['/dashboard'])
}
  ngOnInit() {
  }

}
