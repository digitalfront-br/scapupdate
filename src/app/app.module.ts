import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestLayoutComponent } from './pages/guest-layout.component';
import { AuthLayoutComponent } from './pages/auth-layout.component';
import { HomePageComponent } from './pages/auth/home-page/home-page.component';
import { CategoryPageComponent } from './pages/auth/category-page/category-page.component';
import { QuestionPageComponent } from './pages/auth/question-page/question-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MeetingPageComponent } from './pages/auth/meeting-page/meeting-page.component';
import { CardComponent } from './components/layout/card/card.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryDetailComponent } from './pages/auth/category-detail/category-detail.component';
import { QuestionDetailComponent } from './pages/auth/question-detail/question-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestLayoutComponent,
    AuthLayoutComponent,
    HomePageComponent,
    CategoryPageComponent,
    QuestionPageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MeetingPageComponent,
    CardComponent,
    CategoryDetailComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
