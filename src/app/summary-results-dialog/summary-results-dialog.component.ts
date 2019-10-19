import { Component, OnInit,Inject } from '@angular/core';
import {QuizComponent} from '../quiz/quiz.component'
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';


import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-summary-results-dialog',
  templateUrl: './summary-results-dialog.component.html',
  styleUrls: ['./summary-results-dialog.component.css']
})
export class SummaryResultsDialogComponent implements OnInit {
summary:any;
sore:any;
  constructor(private route:ActivatedRoute,private router:Router, public dialogRef: MatDialogRef<QuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
this.summary=data;
console.log(this.summary)

     }

  ngOnInit() {
  }
goToDash(){
  this.router.navigate(['/dashboard'])
  this.dialogRef.close();
}
}
