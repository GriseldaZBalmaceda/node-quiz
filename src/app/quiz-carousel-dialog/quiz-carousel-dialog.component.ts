/**
 * Author: Griselda
 * Date: 9/24/2019
 * Description: carousel dialog
 */

import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {DashboardComponent} from '../dashboard/dashboard.component'
import {ImagesService} from './images.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-carousel-dialog',
  templateUrl: './quiz-carousel-dialog.component.html',
  styleUrls: ['./quiz-carousel-dialog.component.css']
})
export class QuizCarouselDialogComponent implements OnInit {
quiz:any;
presentations:any;
presentationName:string;
images:any;

/*creating a dialog(modal) that will display the presentation */
  constructor( private router:Router,private imagesService:ImagesService ,public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.quiz=data.sentQuizId
    console.log(this.quiz);
    this.imagesService.getPresentations()
    .subscribe(res => {
    this.presentations = res;
    this.images = this.presentations.filter(p => p.name === this.quiz.quizName)[0].images;
})
}

  ngOnInit() {
  }

  //user is navigated to the quiz page and the modal is closed
quizPage(){
  this.router.navigateByUrl('/dashboard/quiz/' + this.quiz.quizId);
  this.dialogRef.close();
}
}
