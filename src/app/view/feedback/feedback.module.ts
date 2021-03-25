import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeedbackComponent} from '../feedback/feedback.component'
import {FeedbackRoutingModule} from './feedback-routing.module'
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports:[
    FeedbackComponent
  ]
})
export class FeedbackModule { }
