import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstNameText: any;
  lastNameText: any;
  EmailText: any;
  usernameText: any;
  passwordText: any;
  phoneText:any;
 

  constructor() { }

  ngOnInit() {
  
  }


  
  
}
