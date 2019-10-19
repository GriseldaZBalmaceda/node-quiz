/**
 * Author: Griselda
 * Date: 9/24/2019
 * Description: carousel dialog
 */

import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {DashboardComponent} from '../dashboard/dashboard.component'
import {ImagesService} from './images.service'
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

  constructor( private imagesService:ImagesService ,public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.quiz=data.sentQuizId
    this.imagesService.getPresentations()
    .subscribe(res => {
    this.presentations = res;
    this.images = this.presentations.filter(p => p.name === this.quiz.quizName)[0].images;
})
}

  ngOnInit() {
  }

}
