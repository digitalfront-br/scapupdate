import { CategoryDetailComponent } from './pages/auth/category-detail/category-detail.component';
import { QuestionPageComponent } from './pages/auth/question-page/question-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './pages/auth-layout.component';
import { CategoryPageComponent } from './pages/auth/category-page/category-page.component';
import { HomePageComponent } from './pages/auth/home-page/home-page.component';
import { MeetingPageComponent } from './pages/auth/meeting-page/meeting-page.component';
import { QuestionDetailComponent } from './pages/auth/question-detail/question-detail.component';

const routes: Routes = [
  { path: '', component: AuthLayoutComponent, children:[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent, data:{ animation: 'isHome' } },
    { path: 'categories', component: CategoryPageComponent, data:{ animation: 'isCategory' } },
    { path: 'categories/:id', component: CategoryDetailComponent, data:{ animation: 'isCategoryDetail' } },
    { path: 'questions', component: QuestionPageComponent, data:{ animation: 'isQuestion' } },
    { path: 'questions/:id', component: QuestionDetailComponent, data:{ animation: 'isQuestionDetail' } },
    { path: 'meetings', component: MeetingPageComponent, data:{ animation: 'isMeeting' } },
   ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
