import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    MeetingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
