import { MoviePageComponent } from './pages/auth/movie-page/movie-page.component';
import { BookPageComponent } from './pages/auth/book-page/book-page.component';
import { ValuePageComponent } from './pages/auth/value-page/value-page.component';
import { CategoryDetailComponent } from './pages/auth/category-detail/category-detail.component';
import { QuestionPageComponent } from './pages/auth/question-page/question-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './pages/auth-layout.component';
import { CategoryPageComponent } from './pages/auth/category-page/category-page.component';
import { HomePageComponent } from './pages/auth/home-page/home-page.component';
import { MeetingPageComponent } from './pages/auth/meeting-page/meeting-page.component';
import { QuestionDetailComponent } from './pages/auth/question-detail/question-detail.component';
import { GuestLayoutComponent } from './pages/guest-layout.component';
import { LoginPageComponent } from './pages/guest/login-page/login-page.component';
import { AuthenticateGuard } from './components/guard/authenticate.guard';
import { RegisterPageComponent } from './pages/guest/register-page/register-page.component';
import { ForgotPageComponent } from './pages/guest/forgot-page/forgot-page.component';

const routes: Routes = [
  { path: '', component: AuthLayoutComponent, children:[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent, data:{ animation: 'isHome' } },
    { path: 'categories', component: CategoryPageComponent, data:{ animation: 'isCategory' } },
    { path: 'values', component: ValuePageComponent, data:{ animation: 'isValue' } },
    { path: 'categories/:id', component: CategoryDetailComponent, data:{ animation: 'isCategoryDetail' } },
    { path: 'questions', component: QuestionPageComponent, data:{ animation: 'isQuestion' } },
    { path: 'questions/:id', component: QuestionDetailComponent, data:{ animation: 'isQuestionDetail' } },
    { path: 'movies', component: MoviePageComponent, data:{ animation: 'isMovie' } },
    { path: 'books', component: BookPageComponent, data:{ animation: 'isBook' } },
    { path: 'meetings', component: MeetingPageComponent, data:{ animation: 'isMeeting' } },
   ],
   canActivate: [AuthenticateGuard]
  },
  { path: '', component: GuestLayoutComponent, children:[
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent, data:{ animation: 'isLogin' } },
    { path: 'register', component: RegisterPageComponent, data:{ animation: 'isRegister' } },
    { path: 'forgot', component: ForgotPageComponent, data:{ animation: 'isForgot' } },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
   ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
