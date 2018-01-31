import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { DbService } from './db.service';
import { ProfileComponent } from './profile/profile.component';
import { MyGuard } from './my.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',  component:  HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'students/profile/:id', component: ProfileComponent, canActivate: [MyGuard]},
  {path: 'pageNotFound', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'home'} 
];

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [DbService, MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
