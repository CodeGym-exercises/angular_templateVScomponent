import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-final',
  templateUrl: './register-final.component.html',
  styleUrls: ['./register-final.component.css']
})
export class RegisterFinalComponent implements OnInit {
  email: string;
  password: string;
  confirmPass: string;
  country: string;
  age: string;
  gender: string;
  phone: string;
  constructor() { }

  profile = {
    email: 'abc@deg.com',
    password: '1',
    confirmPass: '1',
    country: 'Ha noi',
    age: '1995',
    gender: 'female',
    phone: '1234-5678-90'
  };
  onSubmit(profileForm){
    console.log(this.email);
  }
  ngOnInit() {
  }

}
