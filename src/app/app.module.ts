/**
 * Author: Griselda
 * Date: 9/24/2019
 * Description: App Module
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { AppRoutes } from './app.routing';
import {FlexLayoutModule} from '@angular/flex-layout'
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './shared';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav'
import {HttpClientModule} from '@angular/common/http'
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import {CarouselModule} from 'primeng/carousel';
import {MatDialogModule} from '@angular/material/dialog';
import { QuizCarouselDialogComponent } from './quiz-carousel-dialog/quiz-carousel-dialog.component';
import { QuizComponent } from './quiz/quiz.component';
import {MatButtonModule} from '@angular/material/button';
import { CummulativeSummaryComponent } from './cummulative-summary/cummulative-summary.component';
import {MatTableModule} from '@angular/material/table';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { SummaryResultsDialogComponent } from './summary-results-dialog/summary-results-dialog.component';
//importing all modules that are needed
@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    LoginComponent,
    DashboardComponent,
    QuizCarouselDialogComponent,
    QuizComponent,
    CummulativeSummaryComponent,
    AuthLayoutComponent,
    SummaryResultsDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatListModule,
    CarouselModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false }),
  ],
  exports:[
    QuizCarouselDialogComponent, SummaryResultsDialogComponent
  ],
  entryComponents:[QuizCarouselDialogComponent, SummaryResultsDialogComponent],
  providers: [
    {provide:LocationStrategy,useClass: PathLocationStrategy},
    AuthGuard,
    CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
