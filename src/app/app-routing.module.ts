import { QuestionPageComponent } from './pages/auth/question-page/question-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './pages/auth-layout.component';
import { CategoryPageComponent } from './pages/auth/category-page/category-page.component';
import { HomePageComponent } from './pages/auth/home-page/home-page.component';
import { MeetingPageComponent } from './pages/auth/meeting-page/meeting-page.component';

const routes: Routes = [
  { path: '', component: AuthLayoutComponent, children:[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent, data:{ animation: 'isHome' } },
    { path: 'categories', component: CategoryPageComponent, data:{ animation: 'isCategory' } },
    { path: 'questions', component: QuestionPageComponent, data:{ animation: 'isQuestion' } },
    { path: 'meetings', component: MeetingPageComponent, data:{ animation: 'isMeeting' } },
   ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
