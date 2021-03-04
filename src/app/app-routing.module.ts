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
    { path: 'home', component: HomePageComponent },
    { path: 'categories', component: CategoryPageComponent },
    { path: 'questions', component: QuestionPageComponent },
    { path: 'meetings', component: MeetingPageComponent },
   ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
