import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {Routes,RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {RegisterModule} from '../../src/app/view/register/register.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserService} from '../../src/app/services/user.service'

import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms'
import {FeedbackModule} from '../app/view/feedback/feedback.module';
import { TitleCasePipe } from './view/title-case.pipe';


const routes: Routes= [
  {
    path:'',redirectTo:'/feedback',pathMatch:'full'
  },
  
]




@NgModule({
  declarations: [
    AppComponent,
    TitleCasePipe,
    
       
  ],
  imports: [
    BrowserModule,
    
    FeedbackModule,
    ReactiveFormsModule,
   
    FormsModule,
    RegisterModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  
  ],
  
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
