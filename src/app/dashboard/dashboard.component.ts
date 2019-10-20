/**
 * Author: Griselda
 * Date: 9/24/2019
 * Description:DashBoard component
 */


import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { QuizCarouselDialogComponent } from '../quiz-carousel-dialog/quiz-carousel-dialog.component';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  errorMessage:String;
  quizId:any;
  quiz:any;
  constructor(public dialog: MatDialog,private http:HttpClient,private router:Router) {
  }

openCarousel(data):void{
  this.http.get('/api/quiz/'+ data).subscribe(res=>{
    if(res){
      this.quiz=res;
      console.log(this.quiz)
      //creating a dialog that will open
      const dialogRef = this.dialog.open(QuizCarouselDialogComponent,{
        width:'1000px',
        height:'1000px',
        data:{sentQuizId:{quizName:this.quiz.quizName,quizId:this.quiz.quizId}}  });
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed' , result);
        this.quizId=result.data
          });
    }else{
    this.errorMessage='Please try again'    }
  })

}

quizPage(id){
  this.router.navigateByUrl('/dashboard/quiz/' + id);
}
ngOnInit() {

  }

}
