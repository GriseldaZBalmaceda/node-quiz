/**
 * Author: Griselda
 * Date: 9/24/2019
 * Description: Router Component
 */
import {Routes} from '@angular/router';
import {BaseLayoutComponent} from './shared';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/auth.guard';
import { QuizComponent } from './quiz/quiz.component';
import { CummulativeSummaryComponent } from './cummulative-summary/cummulative-summary.component';
//adding required routes and adding authguard to allow authenticated users to the dashbaord screen
export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
     {path:'',
    component:LoginComponent
  },
  {path:'dashboard',
  component:DashboardComponent,
  children:[

  ],
  canActivate:[AuthGuard]
},
{path:'quiz/:id',
component:QuizComponent,
canActivate:[AuthGuard]
},
{
  path:'past-quizes',
  component:CummulativeSummaryComponent,
  canActivate:[AuthGuard]
}

    ]
  }
];
