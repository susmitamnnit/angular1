import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import {TitleCasePipe} from '../title-case.pipe'
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers:[TitleCasePipe]
 
})
export class FeedbackComponent implements OnInit {
  
  
  feedbackForm: FormGroup;
  selectedAge: any[];
  submitted = false; 
  ageGroups: Array<any>=[];
  movieText:string[]

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private titlecasePipe:TitleCasePipe,
    private userService:UserService,) {
    this.ageGroups = [
      { id: 0, value: 'Select - -' },
      { id: 1, value: 'Child' },
      { id: 2, value: 'Teen' },
      { id: 3, value: 'Adult' },
      { id: 3, value: 'Old Age' }
    ];
    this.selectedAge = this.ageGroups[0].id;
   
   }
   
  
   ngOnInit() {
    this.createForm();
  }

createForm() {    
    this.feedbackForm = this.formBuilder.group({
      movie: ['', Validators.required],
      ageGroups: ['', Validators.required],
      name: ['', Validators.required],
      hours: ['', [Validators.required, Validators.maxLength(168)]]
    });
    this.feedbackForm.controls["ageGroups"].setValue(this.selectedAge);
  }

   sendFeedback() {
    this.submitted = true;
    if (this.feedbackForm.invalid) {
      return;
    }
    else{
      var object = {};
      object["movie"] = this.feedbackForm.value.movie.toString().split(' ');
      object["ageGroups"]=this.feedbackForm.value.ageGroups;
      object["hours"]= this.feedbackForm.value.hours;
      object["name"]=this.feedbackForm.value.name;
      console.log(object)
      alert('Your feedback  for Movie is submitted successfully');
      this.router.navigateByUrl('/register');
      // this.userService.sendData(object).then(data=>{
      //   alert('Your feedback is submitted successfully');
      //   this.router.navigateByUrl('/register');
      //   console.log(this.feedbackForm.value);
      // })
      
      
    }

  }
 
  

}

