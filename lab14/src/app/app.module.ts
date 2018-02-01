import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from './thank-you/thank-you.component';

const ROUTES: Routes = [
  {path: '', component: DataDrivenComponent},
  {path: 'thankyou', component: ThankYouComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
